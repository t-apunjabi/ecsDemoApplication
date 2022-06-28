const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/weatherforecast",
];

module.exports = function (app:any) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7259',
        secure: false
    });

    app.use(appProxy);
};

export { }
