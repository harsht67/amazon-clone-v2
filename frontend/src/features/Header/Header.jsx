import './Header.scss'
import HeaderDropdown from './HeaderDropdown'
import { images } from '../../constants'
import { getCartTotalQty } from '../../store/cartSlice'

import { FiShoppingCart } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiArrowDownSFill } from 'react-icons/ri'
import { IoLocationOutline } from 'react-icons/io5'
import { GoSearch } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

// const cat_data = ["fresh", "today's deal", "fashion", "gift cards", "buy again", "amazon pay", "amazon business"]

function Header() {
  
    const cart = Object.values(useSelector(state => state.cart.items))

    // const user = useSelector(state => state.user)
  
    return (
        <div className='header'>
            
            <Link to='/'>
                <img
                    className='header__logo'
                    src={images.amazon}
                    alt='amazon logo'
                />
            </Link>

            <GiHamburgerMenu
                className='header__menuIcon'
            />

            <div className='header__option header__address'>

                <span className='header__optionLineOne'>
                    <IoLocationOutline
                        className='header__locationIcon'
                    />
                    deliver to harsh
                </span>

                <span className='header__addressSeprator'>
                    -
                </span>

                <span className='header__optionLineTwo'>
                    new delhi 110088
                </span>
                
            </div>

            <div className='header__search'>

                <input
                    className='header__searchInput'
                />

                <div className='header__searchIcon'>
                    <GoSearch className="icon"/>
                </div>

            </div>

            <div className='header__option header__account'>

                <span className='header__optionLineOne'>
                    hello, 
                    {/* {user.isSignedIn ? user.data.name : 'Sign in' } */}
                </span>

                <span className='header__optionLineTwo'>
                    accounts &#38; lists
                    <RiArrowDownSFill
                        className='header__arrowIcon'
                    />
                </span>

                <div className='header__dropdown'>
                    {/* <HeaderDropdown isSignedIn={user.isSignedIn} /> */}
                    <HeaderDropdown/>
                </div>
                
            </div>

            <div className='header__option header__order'>

                <span className='header__optionLineOne'>
                    returns
                </span>

                <span className='header__optionLineTwo'>
                    &#38; orders
                </span>
                
            </div>

            <Link 
                className='header__cart'
                to='/cart'
            >

                <FiShoppingCart className="icon" />

                <span className='header__cartCount'>
                    
                    {getCartTotalQty(cart)}
                    
                </span>

            </Link>

        </div>
    )
}

export default Header