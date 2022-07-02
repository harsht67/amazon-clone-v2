import './CreateAccountPage.scss'
import { images } from '../../constants'
import { userAdded } from '../../store/userSlice'
import ErrBox from './ErrBox'
import { auth } from '../../firebase.js'
import { validateEmail, validatePassword } from '../../hooks'

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useDispatch } from 'react-redux'

function CreateAccountPage(props) {

    const naviagte = useNavigate()

    const dispatch = useDispatch()

    const [field, setField] = useState({
        email: {
            val: '',
            errTxt: '',
        },
        password: {
            val: '',
            errTxt: '',
        },
    })

    const [checkErr, setCheckErr] = useState(false)

    // for error box (errors => sumitting form) 
    const [errBox, setErrBox] = useState({
        isErr: false,
        txt: '',
    })

    // updates input fields
    const changeHandler = (e) => {
        const {name, value} = e.target
        setField({
            ...field,
            [name]: {
                ...field[name],
                val: value,
                errTxt: '',
            }
        })

        name=='email' && validateFuncEmail(value)
        name=='password' && validateFuncPassword(value)
    }

    // submits form 
    const submitFunc = (e) => {
        e.preventDefault()
        validateFuncFields()
        
        // SIGN-UP
        let arr = Object.values(field)
        let l = arr.length
        let l1 = arr.filter(x => x.val!='').length
        let l2 = arr.filter(x => x.errTxt=='').length 

        if(l1==l2 && l==l1) { // => no field is empty + have no errors 
            createUserWithEmailAndPassword(auth, field.email.val, field.password.val)
                .then(auth => {
                    dispatch(userAdded({
                        name: auth.user.email,
                    }))
                    // alert('welcome')
                    naviagte('/')
                })
                .catch(error => {
                    setErrBox({
                        isErr: true,
                        txt: error.message,
                    })
                })
        }
    }

    // all input validation function
    const validateFuncFields = () => {
        setCheckErr(true)
        let e1 = validateFuncEmail(field.email.val)
        let e2 = validateFuncPassword(field.password.val)
    }

    // validate email 
    const validateFuncEmail = (email) => {
        let name = 'email'

        let err = validateEmail(email)

        err!='' && setErrFunc(name, err)
    }

    // validate password
    const validateFuncPassword = (password) => {
        let name = 'password'
        
        let err = validatePassword(password)

        err!='' && setErrFunc(name, err)
    }

    // sets errTxt of a specific field 
    const setErrFunc = (name, err) => {
        setField(prev => {
            return {
                ...prev,
                [name]: {
                    ...prev[name],
                    errTxt: err,
                }
            }
        })
    }

    // switch between sign-in(login) & sign-up
    const toggleLogin = () => {
        props.toggleLogin()
    }

    return (
        <div className='createAccountPage'>

            <section className='createAccountPage__header'>
                                
                <Link to='/'>
                    <img
                        src={images.amazon2}
                        alt='amazon logo'
                        className='loginPage__logo'
                    />
                </Link>

            </section>

            { errBox.isErr && <ErrBox err={errBox.txt} /> }

            <section className='createAccountPage__main'>

                <h1 className='title'>

                    create account
                
                </h1>

                <form>

                    <label>

                        email

                        <input
                            type='email'
                            name='email'
                            value={field.email.val}
                            onChange={changeHandler}
                            className={(checkErr && field.email.errTxt) && 'field--err'}
                        />

                        { (checkErr && field.email.errTxt) &&
                            <span className='err--txt'>! {field.email.errTxt}</span>
                        }

                    </label>

                    <label>

                        password

                        <input
                            type='password'
                            name='password'
                            value={field.password.val}
                            onChange={changeHandler}
                            className={(checkErr && field.password.errTxt) && 'field--err'}
                        />

                        { (checkErr && field.password.errTxt) &&
                            <span className='err--txt'>! {field.password.errTxt}</span>
                        }

                    </label>

                    <button
                        onClick={submitFunc}
                    >

                        continue 

                    </button>

                </form>

                <p className='text'>

                    Already have an account? 
                    
                    <span 
                        className='btn--link'
                        onClick={toggleLogin}
                    >
                        Sign in
                    </span>

                </p>

            </section>



        </div>
    )
}

export default CreateAccountPage