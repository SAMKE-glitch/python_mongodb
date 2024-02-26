import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, getIdToken } from 'firebase/auth'
import { auth } from '../firebase';


function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
  e.preventDefault();

   try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredentials.user
      const idToken = await getIdToken(user)
      localStorage.setItem('token', idToken)
      navigate('/home')
    } catch (err) {
      if (err){
        console.log(err.message)
      }
      }
  }



  return (
    <div className="Login">
    <h2>Login page</h2>
    <form>
      <label htmlFor="emailField">Email:</label>
      <input type="email" id="emailField" name="email" value={email} placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="passwordField">password: </label>
      <input type="password" value={password} id="passwordField" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" onClick={ onSubmit }>Login</button>
    </form>


    <p>
      donot have an accout?{' '}
      <NavLink to='/signup'>
	  sign up{' '}
      </NavLink>
      Forgotten password?{' '}
      <NavLink to='/password-reset'>
	  Password_reset
      </NavLink>
    </p>

    </div>
  )
}


export default Login;
