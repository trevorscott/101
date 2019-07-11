import getConfig from 'next/config';
// Only holds serverRuntimeConfig and publicRuntimeConfig from next.config.js nothing else.
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();


var apiURL;
if( process.env.NODE_ENV !== 'production') {
  apiURL = "http://localhost:3000"
}else {
  apiURL = publicRuntimeConfig.APP_HOST_NAME;
}
export default apiURL