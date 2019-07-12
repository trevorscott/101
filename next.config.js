// next.config.js
module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    APP_HOST_NAME: process.env.APP_HOST_NAME
  }
};