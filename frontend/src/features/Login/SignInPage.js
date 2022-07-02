import './SignInPage.scss'
import SignIn from './SignIn'
import ErrBox from './ErrBox'
import { images } from '../../constants'
import { auth } from '../../firebase.js'
import { userAdded } from '../../store/userSlice'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'

function SignInPage(props) {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const [err, setErr] = useState({
        isErr: false,
        txt: '',
    })

    const resetErr = () => {
        setErr({
            isErr: false,
            txt: '',
        })
    }

    const changeHandler = (name, val) => {

        if(name=='email' && val=='') {
            resetErr()
        }

        setData(prev => {
            return {
                ...prev,
                [name]: val,
            }
        })

        // SIGN-IN
        if(name=='password') {
            signInWithEmailAndPassword(auth, data.email, val)
                .then(auth => {
                    // alert('welcome')
                    dispatch(userAdded({
                        name: auth.user.email,
                    }))
                    navigate('/')
                })
                .catch(error => {
                    let err = ''
                    if(error.code==='auth/wrong-password') {
                        err = 'your password is incorrect'
                    }
                    else if(error.code=='auth/user-not-found') {
                        err = 'we cannot find an account with this email address '
                    }
                    else {
                        err = 'unknown error'
                    }

                    setErr({
                        isErr: true,
                        txt: err,
                    })
                })
        }

    }

    // switch between sign-in(login) & sign-up
    const toggleLogin = () => {
        props.toggleLogin()
    }

    return (
        <div className='SignInPage'> 

            <section className='SignInPage__header'>
                
                <Link to='/'>
                    <img
                        src={images.amazon2}
                        alt='amazon logo'
                        className='SignIn__logo'
                    />
                </Link>

            </section>

            { err.isErr && <ErrBox err={err.txt} /> }

            <section className='SignInPage__main'>

            {
                data.email==''
                    ? <SignIn
                        type='email'
                        changeHandler={changeHandler}
                        resetErr={resetErr}
                    />
                    : <SignIn
                        type='password'
                        email={data.email}
                        changeHandler={changeHandler}
                    />
            }

            </section>

            <section className='SignInPage__footer'>

                <div className='SignInPage__footer__title'>
                
                    <hr/>

                    <span>New to Amazon?</span>
                
                    <hr/>

                </div>

                <button 
                    className='SignInPage__createBtn'
                    onClick={toggleLogin}
                >

                    Create your Amazon account
                
                </button>

            </section>
        
        </div>
    )
}

export default SignInPage