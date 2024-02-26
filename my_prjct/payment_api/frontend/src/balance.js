import { useState, useEffect } from 'react';
import axios from 'axios';


function Balance() {

  useEffect(() => {
    async function getBalance() {
      let data;
      try {
        const response = await axios.get('http://localhost:5000/balance') 
	if (response.status === 200) { data = response.data.message.data[0]  }
	setBalance(data.balance)
      } catch(err) {
        console.log(err.message)
      }
    }

    getBalance();
  })

  const [balance, setBalance] = useState('');
  return (
    <div className="balance">
      <h1>{balance}</h1>
    </div>
  )
}

export default Balance;
