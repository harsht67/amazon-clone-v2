import './Cart.scss'
import CartItem from './CartItem'

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCartTotal } from '../../store/cartSlice'
import { Link } from 'react-router-dom'

function Cart() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const cart = Object.values(useSelector(state => state.cart.items))

    const dispatch = useDispatch()

    // delete item from cart
    const deleteItem = (id) => {

        dispatch({
            type: 'cart/itemDeleted',
            payload: id,
        })
        
    }

    return (
    <div className='cart'>
        
        {
            cart.length == 0
                
                ? <section className='cart__left'>
                    
                    <h2 className='cart--empty'>

                        Your Amazon cart is empty.
                    
                    </h2>
                
                </section>
                
                : <>

                    <section className='cart__left'>

                        <section className='cart__header'>

                            <h2 className='cart__title'>
                                shopping cart
                            </h2>

                            <span className='cart__subTitle'>
                                price
                            </span>

                        </section>

                        <section className='cart__items'>

                            {cart.map(data => (
                                <CartItem
                                    data={data}
                                    deleteItem={deleteItem}
                                />))
                            }

                        </section>

                        <section className='cart__footer'>

                            Subtotal ({cart.length} items) : <strong>&#8377;{getCartTotal(cart).toLocaleString()}</strong>

                        </section>

                    </section>

                    <section className='cart__right'>

                        <span className='cart__subtotal'>

                            Subtotal ({cart.length} items) : <strong>&#8377;{getCartTotal(cart).toLocaleString()}</strong>
                        
                        </span>

                        <Link 
                            className='cart__buyBtn'
                            to='/checkout'
                        >
                            
                            Procced to Buy 
                        </Link>

                    </section>

                </> 
        }

    </div>
  )
}

export default Cart