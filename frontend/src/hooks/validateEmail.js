import validator from 'validator'

const validateEmail = (email) => {
    let err = ''
    
    if(email=='') {
        err = 'enter your email'
    }
    else {
        if(!validator.isEmail(email)) {
            err = 'enter a valid email'
        }
    }

    return err
}

export default validateEmail