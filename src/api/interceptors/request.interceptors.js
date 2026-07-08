export const loggerInterceptor = async (config) => {
  console.log(
    `[REQUEST LOG] \tTimestamp: ${new Date().toISOString()} \tMethod: ${config.method || 'GET'} \tPath: ${config.path || 'null'} \n`
  );
  return config;
};
