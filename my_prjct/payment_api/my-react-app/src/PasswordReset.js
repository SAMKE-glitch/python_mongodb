import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from './firebase'
import { sendPasswordResetEmail } from 'firebase/auth'
import { useState } from 'react';

const PasswordReset = () => {
  const [email, setEmail] = useState('')
  const [resetSent, setResetSent] = useState(false)

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true)
    } catch (err) {
      console.log(err)
    }
  }

    return (
        <div className="container login-container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center">PasswordReset</h2>
                    {resetSent ? (
                    <p>Password reset email sent,check you email for instructions</p>
                    ) : (
	                <>
                    <form>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder='johndoe@gmail.com' onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                       
                        <button type="submit" onClick={handlePasswordReset} className="btn btn-primary btn-block">Password Reset</button>
                    </form>
                    </>)}

                    <div className="text-center mt-3">
                       <p>
                       
                        Password Reset now {' '}
                        <NavLink to='/login'>
                        Login
                        </NavLink>
                        
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PasswordReset;
