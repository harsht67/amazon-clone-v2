import './ProductPage.scss'
import Rating from '../../components/Rating'
import DescBox from './DescBox.js'
import { ProductGalleryBig } from '../../components'
import { client, urlFor } from '../../client'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// const images = ['jk', 'jk2']

function ProductPage() {

    const {id} = useParams()

    // const dispatch = useDispatch()

    const [qty, setQty] = useState(1)

    const [data, setData] = useState({})
    
    const [products, setProducts] = useState({})

    const [img, setImg] = useState('')

    const [desc, setDesc] = useState(false)

    // fetch product data
    useEffect(() => {
        window.scrollTo(0, 0)

        const query = '*[_type == "products"]'

        client
            .fetch(query)
            .then(data => {
                setProducts(data)
                data.forEach(x => {
                    if(x._id==id) {
                        setData(x)
                        setImg(x.img[0])
                    }
                })
            })

    }, [])

    // change quantity 
    const changeHandler = (e) => {
        let n = e.target.value
        n!=0 && setQty(n)
    }

    //add item/product to cart    
    const addToCart = () => {
        // let p = Math.floor(data.mrp-(data.mrp*data.discount/100))

        // dispatch({
        //     type: 'cart/itemAdded',
        //     payload: {
        //         _id: data._id,
        //         name: data.name,
        //         img: data.img,
        //         price: p,
        //         prime: data.prime,
        //         qty: parseInt(qty),
        //     }
        // })

    }

    // change main image  
    const changeImg = (e) => {
        setImg(e.target.getAttribute('data-val'))
    }

    // hide/show desc box 
    const toggleDesc = () => {
        setDesc(prev => !prev)
    }

    return (
        <div className='productPage'>

            <section className='productPage__row1'>

                <section className='productPage__left'>

                    {img!='' && 
                        <img
                            src={urlFor(img)}
                            alt='product image'
                            className='productPage__img'
                        />
                    }

                    <section className='productPage__gallery'>

                        {data.img?.map(data => (
                            <img
                                src={urlFor(data)}
                                alt='product image'
                                data-val={data.asset._ref}
                                onClick={changeImg}
                                className={img == data && 'img--focus'}
                            />
                        ))}

                    </section>

                </section>

                <section className='productPage__center'>

                    <span className='productPage__name'>

                        {data.name}

                    </span>

                    <span className='productPage__rating'>

                        <Rating rating={data.rating} />

                    </span>

                    <hr className='first--line' />

                    <div className='productPage__priceBox'>

                        <span className='productPage__price'>
                            &#8377;{Math.floor(data.mrp - (data.mrp * data.discount / 100)).toLocaleString()}
                        </span>

                        {data.discount > 0 &&
                            <span className='productPage__discount'>
                                (-{data.discount}%)
                            </span>
                        }

                        <span className='productPage__mrp'>
                            M.R.P. : <strike>&#8377;{(data.mrp*1).toLocaleString()}</strike>
                        </span>

                    </div>

                    {data.prime &&
                        <span className='productPage__prime'>
                            prime
                        </span>
                    }

                    <hr/>

                    <DescBox
                        desc={desc}
                        data={data.desc}
                        toggleDesc={toggleDesc}
                    />

                </section>

                <section className='productPage__right'>

                    <span className='productPage__price'>
                        &#8377;{Math.floor(data.mrp - (data.mrp * data.discount / 100)).toLocaleString()}
                    </span>

                    {data.prime &&
                        <span className='productPage__prime'>
                            prime
                        </span>
                    }

                    <span className='productPage__stock'>
                        In stock
                    </span>

                    <div className='productPage__qty'>

                        <span>QTY:</span>

                        <input 
                            type='number'
                            name='qty'
                            value={qty} 
                            onChange={changeHandler}
                            onWheel={(e)=>e.target.blur()}
                        />

                    </div>

                    <button 
                        className='productPage__cartBtn'
                        onClick={addToCart}
                    >
                        Add to Cart
                    </button>

                    <hr/>

                    <button className='productPage__wishlistBtn'>
                        Add to Wishlist
                    </button>

                </section>
                
                <section className='productPage__descBox'>

                    <DescBox
                        desc={desc}
                        data={data.desc}
                        toggleDesc={toggleDesc}
                    />

                </section>

            </section>

            <section className='productPage__row2'>

                { products.length>0 && 
                    <ProductGalleryBig 
                        data={products}
                        title='Similar items you may like'
                    /> 
                }

            </section>

        </div>
    )
}

export default ProductPage