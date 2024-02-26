
import './App.css';
import './Payments';
import SignUpForm from './signup';
import UserLogin from './LoginForm';
import PasswordReset from './PasswordReset';
import TransactionDetails from './Transactions'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import Confirm from './confirmation';
import PaymentForm  from './PaymentForm';


function App() {
  
  return (
     <div className="App">
      <Router>
        <section>
	  <Routes>
	    <Route path="/signup" element={ <SignUpForm />} />
	    <Route path="/login" element={ <UserLogin /> } />
      <Route path='/reset-password' element={ <PasswordReset /> } />
      <Route path='/account' element={ <TransactionDetails /> } />
	    <Route path='/confirmation' element={ <Confirm /> } />
      <Route path='/transfers' element={ <PaymentForm /> }/>
	  </Routes>
	</section>
      </Router>
    </div>

  );
}

export default App;
