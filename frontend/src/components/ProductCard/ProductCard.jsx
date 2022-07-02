import './ProductCard.scss'
import Rating from '../Rating'

import { useNavigate } from 'react-router-dom'
import { urlFor } from '../../client'

function ProductCard(props) {

    const {name, rating, img, mrp, discount, prime} = props.data

    const navigate = useNavigate()

    const goTo = () => {
        // navigate('/product/'+_id)
    }

    return (
    <div className='productCard'>
        
        <section className='productCard__img'>

            <img
                // src={require(`./images/product_img_${img}.jpg`)}
                src={urlFor(img[0])}
                alt='product image'
            />

        </section>

        <section className='productCard__desc'>

            <span 
                className='productCard__name'
                onClick={goTo}
            >
                {name}
            </span>

            <span className='productCard__rating'>

                <Rating rating={rating} />

            </span>

            <span className='productCard__price'>

                &#8377;{Math.floor(mrp-(mrp*discount/100)).toLocaleString()}
            
            </span>

            {
                discount > 0 &&
                <div className='productCard__mrp'>

                    <strike>
                        &#8377;{(mrp*1).toLocaleString()}
                    </strike>

                    &nbsp;
                    
                    ({discount}% off)

                </div>
            }   

            <span className='productCard__prime'>

                {prime && 'prime'}

            </span>

        </section>

    </div>
    )
}

export default ProductCard