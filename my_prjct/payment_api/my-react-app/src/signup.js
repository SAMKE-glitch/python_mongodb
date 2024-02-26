import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getIdToken, sendEmailVerification } from 'firebase/auth'
import { auth } from './firebase';


const UserRegistrationForm = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [required, setRequired] = useState(false)
  const [match, setMatch] = useState(false)
  const [passwordLength, setPasswordLength] = useState(false);
  const [emailInUse, setEmailInUse] = useState(false)
  const [networkError, setNetworkError] = useState(false)

  const onSubmit = async (e) => {
  e.preventDefault();
   if (!email || !password || !password1 || !firstname || !lastname || !phonenumber) {
    setRequired(true)
    setMatch(false)
    setPasswordLength(false)
    setEmailInUse(false)
    setNetworkError(false)
    console.log('All fields are required')
    return;
   }
   if (password1 !== password) {
    setMatch(true);
    setRequired(false)
    setPasswordLength(false)
    setEmailInUse(false)
    setNetworkError(false)
    console.log('password must match'); 
    return
    }

    if (password1 === password) {
        setPasswordLength(false)
        setEmailInUse(false)
        setNetworkError(false)
    }

    if (password.length < 6) {
        setPasswordLength(true)
        setMatch(false)
        setRequired(false)
        setEmailInUse(false)
        setNetworkError(false)
        console.log('not enough chararacters.')
        return
    }

   try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
      await sendEmailVerification(userCredentials.user)
      const user = userCredentials.user
      const idToken = await getIdToken(user)
      localStorage.setItem('token', idToken)

      return navigate("/confirmation")

    } catch (err) {
      console.log(err.code)
      if (err.code === 'auth/email-already-in-use') {
        setEmailInUse(true)
        setPasswordLength(false)
        setMatch(false)
        setRequired(false)
        setNetworkError(false)
      }
      if (err.code == 'auth/network-request-failed') {
        setNetworkError(true)
        setEmailInUse(false)
        setPasswordLength(false)
        setMatch(false)
        setRequired(false)
      }
       return;
      }

      
  }

    return (
        <div className="container">
            <h1>User Registration Form</h1>
            <form>
                {networkError && <h5>please check you network connection</h5>}
                {emailInUse && <h5>This email is already in use.</h5>}
                {required && <h5>All fields are required.</h5>}
                {match && <h5>Ooops.. Passwords don't match.</h5>}
                <div className="form-group row first-field">
                    <label htmlFor="firstname" className="col-sm-2 col-form-label">First Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="firstname" value={firstname} name="firstname" placeholder='John' onChange={(e) => setFirstname(e.target.value)} required />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="lastname" className="col-sm-2 col-form-label">Last Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="lastname" value={lastname} name="lastname" placeholder='Doe' onChange={(e) => setLastname(e.target.value)} required />
                    </div>
                </div>

                
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
                    <div className="col-sm-10">
                        <input type="email" value={email} className="form-control" id="email" name="email" placeholder='johndoe@gmail.com' onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="phonenumber" className="col-sm-2 col-form-label">Phone Number:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="phonenumber" name="phonenumber" value={phonenumber} placeholder='+254 700000000' onChange={(e) => setPhonenumber(e.target.value)} required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password1" className="col-sm-2 col-form-label">Password:</label>
                    {passwordLength && <h6 style={{color: 'red'}}>must be 6 or more characters</h6>}
                    {!passwordLength && <h6>must be 6 or more characters</h6>}
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="password1" name="password1" placeholder='enter your password' value={password1} onChange={(e) => setPassword1(e.target.value)} required />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Confirm password:</label>
                    {passwordLength && <h6 style={{color: 'red'}}>must be 6 or more characters</h6>}
                    {!passwordLength && <h6>must be 6 or more characters</h6>}
                    <div className="col-sm-10">
                        <input type="password" value={password} className="form-control" id="password" name="password" placeholder='confirm password'  onChange={(e) => setPassword(e.target.value)}required />
                    </div>
                </div>


                <div className="row">
                    <div className="">
                    <div className="">
                        <button type="submit" className="btn btn-primary btn-lg" onClick={ onSubmit }>Register</button>
                        <p>
                        Do have an account?{' '}
                        <NavLink to='/login'>
                        login{' '}
                        </NavLink>
                        </p>
                    </div>
                    {networkError && <h5>please check you network connection</h5>}
                    {emailInUse && <h5>This email is already in use.</h5>}
                    {required && <h5>All fields are required.</h5>}
                    {match && <h5>Ooops.. Passwords don't match.</h5>}

                    </div>
                    
                </div>
            </form>
        </div>
    );
};

export default UserRegistrationForm;