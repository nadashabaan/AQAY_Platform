const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/AqayAssistant",
    createProxyMiddleware({
      target: "https://aqay-assistant.onrender.com",
      changeOrigin: true,
      pathRewrite: {
        "^/AqayAssistant": "",
      },
    })
  );
};
