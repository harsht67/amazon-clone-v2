import './Login.scss'
import SignInPage from './SignInPage'
import CreateAccountPage from './CreateAccountPage'

import { useState } from 'react'

function Login() {

    const [login, setLogin] = useState(true)

    const toggleLogin = () => {
        setLogin(prev => !prev)
    }

    return (
        <div className='login'>
        
        {
            login 
                ? <SignInPage toggleLogin={toggleLogin} /> 
                : <CreateAccountPage toggleLogin={toggleLogin} />
        }
            
        </div>
    )
}

export default Login