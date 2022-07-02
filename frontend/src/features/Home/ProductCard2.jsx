import './ProductCard2.scss'
import { images } from '../../constants'

import { useState } from 'react'

const data = {
    name: 'Jujutsu kaisen',
    price: {
        mrp: 1200,
        discount: 30,
    },
}

const imgs = ['product_img_jk', 'product_img_jk2']

function ProductCard2() {

    const [img, setImg] = useState('product_img_jk')

    // change main image  
    const changeImg = (e) => {
        setImg(e.target.getAttribute('data-val'))
    }

    const {name, price} = data
    const {mrp, discount} = price

    return (
        <div className='productCard2'>
            
            <h2 className='productCard2__title'>
                Continue shopping for
            </h2>

            <img
                src={images[img]} 
                alt='product image'
                className='productCard2__img'
            />
        
            <section className='productCard2__desc'>

                <p className='productCard2__name'>
                    {name}
                </p>

                <p className='productCard2__price'>

                    &#8377;{mrp-(mrp*discount/100).toLocaleString()}

                    <span className='productCard2__mrp'>
                        &#8377;{(mrp*1).toLocaleString()}.00
                    </span>

                </p>

            </section>

            <section className='productCard2__gallery'>

                { imgs.map(data => (
                    <img
                        src={images[data]}
                        alt='product image'
                        data-val={data}
                        onClick={changeImg}
                        className={img==data && 'img--focus'}
                    />
                )) }

            </section>

        </div>
    )
}

export default ProductCard2