import './CartItem.scss'
import { urlFor, client } from '../../client'
import { getPrice } from '../../store/cartSlice'

import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

function CartItem(props) {
    
    const dispatch = useDispatch()

    const {id, qty} = props.data

    const [item, setItem] = useState({})

    // fetch & set specific product data based on id
    useEffect(() => {
        const query = '*[_type == "products"]'

        client 
            .fetch(query)
            .then(data => {
                data.forEach(d => {
                    d._id==id && setItem(d) 
                })
            })
    })

    // delete cart item
    const deleteItem = () => {
        props.deleteItem(id)
    }

    // change qty of cart item
    const changeHandler = (e) => {
        let qty = parseInt(e.target.value)

        if(qty<=0) {
            dispatch({
                type: 'cart/itemDeleted',
                payload: id,
            })
        }
        else {
            dispatch({
                type: 'cart/itemQtyChanged',
                payload: {
                    id,
                    qty,
                }
            })
        }

    }

    return (
    <div className='CartItem'>

        {item.img &&
            <img
                src={urlFor(item.img[0])}
                alt='product image'
                className='CartItem__img'
            />
        }

        <section className='CartItem__desc'>

            <span className='CartItem__name'>
                
                {item.name}

            </span>

            <span className='CartItem__price'>

                &#8377;{getPrice(item.mrp, item.discount)}.00
            
            </span>

            <span className='CartItem__prime'>

                {item.prime && 'prime'}
            
            </span>

            <section className='CartItem__desc__footer'>

                <div className='CartItem__qty'>

                    <input
                        type='number'
                        value={qty}
                        onChange={changeHandler}
                        onWheel={(e)=>e.target.blur()}
                    />

                </div>

                <span>
                    <AiOutlineDelete
                        className='CartItem__deleteBtnIcon'
                        onClick={deleteItem}
                    />
                </span>

            </section>

        </section>

        <section className='CartItem__price'>

            &#8377;{getPrice(item.mrp, item.discount)}.00
        
        </section>

    </div>
  )
}

export default CartItem