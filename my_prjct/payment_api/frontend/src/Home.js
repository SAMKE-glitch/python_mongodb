import axios from 'axios';
import { useState, useEffect } from 'react';
import Logout from './authPage/Logout';
import PaymentForm from './form';
import Balance from './balance';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [data, setData] = useState('');
  const navigate = useNavigate();
  let test = localStorage.getItem('token')
  useEffect(() => {
    async function getHome() {
      const token = localStorage.getItem('token')
      try {
        const res = await axios.get('http://localhost:5000/', {headers: {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'}});
	if (res.status === 200) { setData(res.data) } 
      } catch (err){
        if (err.res && err.res.status === 403) {
          navigate('/login')
	}
      }
    }
    getHome();
  }, []);


  return (
    <div className="Home">
      <Logout />
      <Balance />
      <h1>Home page</h1>
	  <h5>{ data }</h5>
	  <PaymentForm />
    </div>
  )
}

export default Home;
