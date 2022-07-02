import './SignIn.scss'
import validateEmail from '../../hooks/validateEmail'

import { useState } from 'react'

function SignIn({type, ...props}) {

    const [field, setField] = useState({
        val: '',
        errTxt: '',
    })

    // updates input field 
    const changeHandler = (e) => {
        let val = e.target.value

        setField({
            ...field, 
            val: val,
        })

        type=='email' && validateFuncEmail(val)
        type=='password' && validateFuncPassword(val)
    }
    
    const [checkErr, setCheckErr] = useState(false)

    const submitFunc = () => {
        setCheckErr(true)
        validateFunc()
        
        if(field.val!='' && field.errTxt=='') {
            let val = field.val
            resetField()
            props.changeHandler(type, val)
        }
    }
    
    // reset field
    const resetField = () => {
        setField({
            val: '',
            errTxt: '',
        })
    }

    // validation function 
    const validateFunc = () => {
        type=='email' && validateFuncEmail(field.val) 
        type=='password' && validateFuncPassword(field.val)
    }

    // validation function for email
    const validateFuncEmail = (val) => {
        let err = ''
        err = validateEmail(val)
        setErrFunc(err)
    }

    // validation function for password
    const validateFuncPassword = (val) => {
        let err = ''
        if(val=='') {
            err = 'enter you password'
            setErrFunc(err)
        }
    }

    // set errText for field
    const setErrFunc = (err) => {
        setField(prev => {
            return {
                ...prev,
                errTxt: err,
            }
        })
    }

    // go back to email field 
    const goBack = () => {
        props.changeHandler('email', '')
    }

    return (
        <div className='signIn'>
        
            <h1 className='title'>
                Sign-In
            </h1>

            {
                type=='password' &&
                    <p className='signIn__subTitle'>

                        {props.email}
                        
                        <span 
                            className='btn--link'
                            onClick={goBack}
                        >
                            Change
                        </span>
                    
                    </p>
            }

            <label className='signIn__field'>
                
                {type}

                <input
                    type={type}
                    value={field.val}
                    onChange={changeHandler}
                    className={(checkErr && field.errTxt) && 'field--err'}
                />

                { (checkErr && field.errTxt) && 
                    <span className='err--txt'>&#33; {field.errTxt}</span> 
                }

            </label>

            <button 
                className='signIn__btn'
                onClick={submitFunc}
            >

                { type=='email' ? 'Continue' : 'Sign-In' }
            
            </button>

            <p className='signIn__text'>

                By continuing, you agree to Amazon's 
                <span className='btn--link'>Conditions of Use</span> 
                and
                <span className='btn--link'>Privacy Notice.</span>
            
            </p>
        
        </div>
    )
}

export default SignIn