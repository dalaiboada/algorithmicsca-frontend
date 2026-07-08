import { v4 as uuidv4 } from 'uuid';

const ERROR_MESSAGES = {
  400: 'La petición del navegador es incorrecta o ilegible.',
  401: 'Requiere credenciales de autenticación válidas.',
  403: 'El servidor entiende quién eres, pero rechaza darte acceso.',
  404: 'La página o recurso solicitado no existe.',

  502: 'El servidor recibió una respuesta inválida de otro servidor intermediario.',
  503: 'El servidor está saturado o en mantenimiento.',
  500: 'Fallo general e inesperado en el servidor.',
};

const createErrorFactory = (name, defaultStatusCode) =>
  class extends Error {
    constructor(
      message = ERROR_MESSAGES[defaultStatusCode],
      statusCode = defaultStatusCode,
      details = null
    ) {
      super(message);
      this.traceId = uuidv4();
      this.name = name;
      this.statusCode = statusCode;
      this.isOperational = true; // Error esperado
      this.timestamp = new Date().toISOString();
      this.details = details;

      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  };

export const BadRequestError = createErrorFactory('BadRequestError', 400);
export const UnauthorizedError = createErrorFactory('UnauthorizedError', 401);
export const ForbiddenError = createErrorFactory('ForbiddenError', 403);
export const NotFoundError = createErrorFactory('NotFoundError', 404);

export const InternalServerError = createErrorFactory(
  'InternalServerError',
  500
);
export const BadGateway = createErrorFactory('BadGateway', 502);
export const ServiceUnavailable = createErrorFactory('ServiceUnavailable', 503);

export const errorMap = {
  400: BadRequestError,
  401: UnauthorizedError,
  403: ForbiddenError,
  404: NotFoundError,
  502: BadGateway,
  503: ServiceUnavailable,
  500: InternalServerError,
};
