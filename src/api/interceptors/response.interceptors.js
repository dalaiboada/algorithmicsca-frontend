export const responseLoggerInterceptor = async (data, response) => {
  console.log('--- [RESPONSE LOG] ---');
  console.log(`Status: ${response.status} ${response.statusText}`);
  console.log(`URL: ${response.url}`);
  console.log(`Content-Type: ${response.headers.get('content-type')}`);

  // Opcional: ver un Trace-ID si el servidor lo devuelve en los headers
  const traceId = response.headers.get('X-Trace-ID');
  if (traceId) {
    console.log(`Server Trace-ID: ${traceId}`);
  }

  console.log('----------------------');

  return data;
};
