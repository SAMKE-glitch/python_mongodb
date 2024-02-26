## api Documentation


* <h5>note: This app runs on  node version 20</h5>
* To be able run this apllication on your machine run `npm install` as you get the json file in the api dir
* To start the backend of this api run the command `npm run start-server` inside the api directory



======
<h1>Authentication</h1>

<h3>firebase</h3>

* we leveraged firebase authentication system for this application.
* Using react create-app we got user credentials and using the javascript sdk securely registered our users.
* on our server side we made sure to verify every request using a middleware giving acces to authenticated.users only 

```
    function authMiddleware(request, response, next) {
    const headerToken = request.headers.authorization;
    if(!headerToken) return response.json({error: "No token provided"}).status(401)
    if(headerToken && headerToken.split(" ")[0] !== "Bearer") return response.status(401).json({error: "Missng required token"})
    const token = headerToken.split(" ")[1];
    firebase.auth().verifyIdToken(token)
    .then(function(id) {
        request.user = id;
        next()
    })
    .catch(function(err) {
        console.log(`Error verifying token: ${err}`)
        response.status(403).json({error: 'Invalid token'})
    })
    }

```

* This involves a multi step authentication process in:
<li>
<ol>sign up</ol>
<ol>Verify email</ol>
<ol>Login</ol>
</li> 

* Also an account recovery system in cases of FORGOTTEN PASSWORD.
<h5>note: this means u need the frontend and backend to use this api.</h5>


======
## testing my branch
