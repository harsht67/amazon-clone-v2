const validatePassword = (password) => {
    let err = ''

    if(password=='') {
        err = 'enter your password'
    }
    else {
        let rex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
        if(!password.match(rex)) {
            err = 'enter a valid password'
        }
    }

    return err
}

export default validatePassword