
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, getIdToken } from 'firebase/auth'
import { auth } from './firebase';
import { useState } from 'react';


const UserLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [required, setRequired] = useState(false);
    const [networkError, setNetworkError] = useState(false);
    const [invalidCredentilas, setInvalidCredentials] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!email || !password) {
            setRequired(true)
            setNetworkError(false)
            setInvalidCredentials(false)
            console.log('All fields are required')
            return;
           }

        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredentials.user
            const idToken = await getIdToken(user)
            localStorage.setItem('token', idToken)
            navigate('/account')
          } catch (err) {
            console.log(err.code)
            if (err.code === 'auth/network-request-failed') {
              setNetworkError(true)
              setRequired(false)
              setInvalidCredentials(false)
            }
            if (err.code === 'auth/invalid-credential') {
              setInvalidCredentials(true)
              setNetworkError(false)
              setRequired(false)
            }
            }
    }


    return (
        <div className="login">
          <div className="container login-container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="text-center">Login</h1>
                    {invalidCredentilas && <h5>Invalid credentials</h5>}
                    {networkError && <h5>please check you internet connection.</h5>}
                    {required && <h5>All fields are required</h5>}
                    <form action="/login" method="POST">
                        <div className="form-group first-field">
                            <label htmlFor="username">Email:</label>
                            <input type="email" className="form-control" id="email" value={email} name="email" placeholder='johndoe@gmail.com' onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="form-control" id="password" value={password} name="password" placeholder='enter your password' onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button onClick={ onSubmit } type="submit" className="btn btn-primary btn-block btn-lg">Login</button>
                    </form>
                    <div className="text-center mt-3">
                       <p>
                        Don't have an account?{' '}
                        <NavLink to='/signup'>
                        sign up{' '}
                        </NavLink>
                        <br/>
                        Forgotten password?{' '}
                        <NavLink to='/reset-password'>
                        Password_reset
                        </NavLink>
                        
                        </p>

                    </div>
                </div>
            </div>
          </div>

          

        </div>
        
    );
};

export default UserLogin;
