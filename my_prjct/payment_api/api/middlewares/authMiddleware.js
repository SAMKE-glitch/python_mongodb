const firebase = require('../firebase/index')

/*
This is the authentication middleware which would verify using firebase every request to this sever
Authetication: firebase (email and password)
*/

function authMiddleware(request, response, next) {
  /*
  authMiddleware: authentication middleware
  function: verify every request to server
  expect: Every user must be verified with email and password(firebase)
  */

  const headerToken = request.headers.authorization;
  if(!headerToken) return response.json({error: "No token provided"}).status(401)
  if(headerToken && headerToken.split(" ")[0] !== "Bearer") return response.status(401).json({error: "Missng required token"})
  const token = headerToken.split(" ")[1];
  firebase.auth().verifyIdToken(token)
  .then(function(id) {
    request.user = id;
    console.log(id)
    next()
  })
  .catch(function(err) {
    console.log(`Error verifying token: ${err}`)
    response.status(403).json({error: 'Invalid token'})
  })
}

module.exports = authMiddleware;
