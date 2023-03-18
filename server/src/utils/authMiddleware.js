const firebase = require("../firebase");

function authMiddleware(request, response, next) {
  const headerToken = request.headers.authorization;
  if (!headerToken) {
    response.statusCode = 401;
    return response.send({ message: "No token provided" });
  }

  if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
    response.statusCode = 401;
    response.send({ message: "Invalid token" });
  }

  const token = headerToken.split(" ")[1];
  firebase
    .auth()
    .verifyIdToken(token)
    .then(() => next())
    .catch(() => {
      response.statusCode = 401;
      response.send({ message: "Could not authorize" });
    });
}

module.exports = authMiddleware;
