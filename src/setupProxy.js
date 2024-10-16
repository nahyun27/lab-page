const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      // target: "https://localhost:5000",
      target: "https://192.168.0.166:5000",
      changeOrigin: true,
    })
  );
};
