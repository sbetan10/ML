
const { config } = require("./config/config");
const { author } = config

// Middleware para agregar la firma author a todos los response
function interceptor(req, res, next) {
  var originalSend = res.send;
  res.send = function () {
    let objectResponse = JSON.parse(arguments[0])
    arguments[0] = JSON.stringify({ ...objectResponse, author });
    originalSend.apply(res, arguments);
  };
  next();
}

module.exports = interceptor;
