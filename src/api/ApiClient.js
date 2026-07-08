import { InternalServerError, errorMap } from './errors.js';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export class ApiClient {
  constructor(baseUrl = BASE_URL, authToken = null) {
    this.baseUrl = baseUrl;
    this.authToken = authToken;
    this.requestInterceptors = [];
    this.responseInterceptors = [];
  }

  addRequestInterceptor(fn) {
    this.requestInterceptors.push(fn);
  }
  addResponseInterceptor(fn) {
    this.responseInterceptors.push(fn);
  }
  setAuthToken(token) {
    this.authToken = token;
  }

  async request(path, options = {}) {
    let config = { ...options, path };

    // Ejecución de interceptores de request
    for (const interceptor of this.requestInterceptors) {
      config = await interceptor(config);
    }

    // Reintentos
    return this._executeRequest(path, config, config.retries || 0);
  }

  async _executeRequest(path, config, retriesLeft) {
    const { auth = false, timeout = 8000, ...fetchOptions } = config;
    const headers = { Accept: 'application/json', ...fetchOptions.headers };

    if (auth) {
      if (!this.authToken) throw new Error('Requiere autenticación.');
      headers['Authorization'] = `Bearer ${this.authToken}`;
    }

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(`${this.baseUrl}${path}`, {
        ...fetchOptions,
        headers,
        signal: controller.signal,
      });

      clearTimeout(id);

      // Manejo de errores
      if (!response.ok) {
        const ErrorClass = errorMap[response.status] || InternalServerError;
        throw new ErrorClass();
      }

      // Transformación de datos
      let data = response.headers
        .get('content-type')
        ?.includes('application/json')
        ? await response.json()
        : await response.text();

      // Ejecución de interceptores de respuesta
      for (const interceptor of this.responseInterceptors) {
        data = await interceptor(data, response);
      }

      return data;
    } catch (error) {
      clearTimeout(id);

      const isTimeout = error.name === 'AbortError';
      const isServerError = error.statusCode >= 500;
      const canRetry = (isTimeout || isServerError) && retriesLeft > 0;

      if (canRetry) {
        console.warn(
          `[RETRY]: ${error.message || 'Error de servidor'} en ${path}. Reintentando... (${retriesLeft} intentos restantes) \n`
        );
        return this._executeRequest(path, config, retriesLeft - 1);
      }

      if (isTimeout) throw new Error('Timeout');
      throw error;
    }
  }

  // Métodos HTTP permanecen iguales
  get(path, options = {}) {
    return this.request(path, { ...options, method: 'GET' });
  }

  _requestWithBody(method, path, data, options) {
    return this.request(path, {
      ...options,
      method,
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json', ...options.headers },
    });
  }

  post(path, data, options = {}) {
    return this._requestWithBody('POST', path, data, options);
  }
  put(path, data, options = {}) {
    return this._requestWithBody('PUT', path, data, options);
  }
  patch(path, data, options = {}) {
    return this._requestWithBody('PATCH', path, data, options);
  }
  delete(path, options = {}) {
    return this.request(path, { ...options, method: 'DELETE' });
  }
}
