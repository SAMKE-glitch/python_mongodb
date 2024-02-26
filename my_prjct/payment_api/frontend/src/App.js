import './App.css';
import SignUp from './authPage/SignUp';
import Login from './authPage/Login';
import PasswordReset from './authPage/ResetPassword';
import Home from './Home';
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <section>
	  <Routes>
	    <Route path="/signup" element={ <SignUp />} />
	    <Route path="/login" element={ <Login /> } />
	    <Route path="/home" element={ <Home /> } />
	    <Route path="/password-reset" element={ <PasswordReset /> } />
	  </Routes>
	</section>
      </Router>
    </div>
  );
}

export default App;
