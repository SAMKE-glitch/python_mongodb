import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getIdToken, sendEmailVerification } from 'firebase/auth'
import { auth } from '../firebase';


function SignUp() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
  e.preventDefault();

   try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
      await sendEmailVerification(userCredentials.user)
      const user = userCredentials.user
      await user.reload();
      if(!user.emailVerified) { throw new Error('Email not verified')}
      const idToken = await getIdToken(user)
      localStorage.setItem('token', idToken)
      navigate('/home')
    } catch (err) {
      console.log(err)
      }
  }



  return (
    <div className="SignUp">
    <h2>SignUp page</h2>
    <form>
      <label htmlFor="emailField">Email:</label>
      <input type="email" id="emailField" name="email" value={email} placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="passwordField">password: </label>
      <input type="password" value={password} id="passwordField" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" onClick={ onSubmit }>SignUp</button>
    </form>

    <p>
      Already have an account?{' '}
      <NavLink to='/login'>
	  sign in
      </NavLink>
    </p>
    </div>
  )
}


export default SignUp;
