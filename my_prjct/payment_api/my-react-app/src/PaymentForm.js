import { useState } from 'react';
import axios from 'axios';

function PaymentForm() {
  const [email, setEmail] = useState('')
  const [amount, setAmount] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/acceptpayment', {email: email, amount: amount})
      const authorizationUrl = response.data.message.data.authorization_url
      window.location.href = authorizationUrl;
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className="paymenForm">
      <h2>Payment Form</h2>
      <form>
  <label htmlFor="emailField">Email:</label>
  <input type="email" id="emailField" name="email" value={email} placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />

  <label htmlFor="amountField">Amount:</label>
  <input type="text" id="amountField" name="amount" value={amount} placeholder="amount" onChange={(e) => setAmount(e.target.value)} />
  <button type="submit"  onClick={ onSubmit }>Make payment</button>
      </form>
    </div>
  )
}

export default PaymentForm;