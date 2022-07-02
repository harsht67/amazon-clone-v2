import './HeaderDropdown.scss'
import { auth } from '../../firebase.js'

import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'

function HeaderDropdown(props) {

    const naviagte = useNavigate()

    const dispatch = useDispatch()

    const signOutFunc = () => {
        signOut(auth)
            .then(() => {
                // alert('successfully signed out')
                dispatch({
                    type: 'user/userRemoved',
                })
                naviagte('/login')
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='headerDropdown'>
            
            <span className='headerDropdown__option'>
                your account
            </span>

            <span className='headerDropdown__option'>
                your orders
            </span>

            <span className='headerDropdown__option'>
                your wishlist
            </span>

            <hr/>

            <span className='headerDropdown__option'>
                {props.isSignedIn
                    ? <span onClick={signOutFunc}>
                        sign out
                    </span>
                    : <Link to='/login' >
                        sign in
                    </Link>
                }
            </span>

        </div>
    )
}

export default HeaderDropdown