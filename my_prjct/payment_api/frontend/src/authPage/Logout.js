import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase'

function Logout(){
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth)
      localStorage.removeItem('token')
      navigate('/login')
    } catch (err) {
      console.log(err)
    }
  }

  return (
   <div className="logout">
    <button onClick={ handleLogout }>Logout</button>
   </div>
  )
}

export default Logout
