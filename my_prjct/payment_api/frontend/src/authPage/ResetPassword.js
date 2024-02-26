import { useState } from 'react';
import { auth } from '../firebase'
import { sendPasswordResetEmail } from 'firebase/auth'


function PasswordReset() {
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
    <div className="PasswordReset">
      <h2>Password Reset</h2>
      {resetSent ? (
        <p>Password reset email sent,check you email for instructions</p>
      ) : (
	<>
	 <p>Enter you email address to reset your password.</p>
	 <label>Email:</label>
	 <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
	 <button onClick={handlePasswordReset}>Reset Password</button>
	 </>
      )}
    </div>
  )
}

export default PasswordReset;
