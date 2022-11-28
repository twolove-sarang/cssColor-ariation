const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/airport", {
      target: "http://openapi.airport.co.kr",
      pathRewrite: {
        "^/airport": "",
      },
      changeOrigin: true,
    })
  );
};
