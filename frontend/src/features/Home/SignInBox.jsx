// styles
import './SignInBox.scss'

import { useNavigate } from 'react-router'

function SignInBox() {

  const navigate = useNavigate()

  const goToLogin = () => {
    navigate('/login')
  }

  return (
    <div className='signInBox'>

      <span className='signInBox__title'>
      
        Sign in for your best experience
      
      </span>

      <button 
        className='signInBox__btn'
        onClick={goToLogin}
      >

        Sign in securely
      
      </button>

    </div>
  )
}

export default SignInBox