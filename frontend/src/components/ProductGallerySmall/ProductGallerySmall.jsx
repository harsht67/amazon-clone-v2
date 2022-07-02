import './ProductGallerySmall.scss'
import { urlFor } from '../../client'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

const X = 175

function ProductGallerySmall(props) {

    const [data, setData] = useState(props.data)
    const [n, setN] = useState(7)

    const naviagte = useNavigate() 

    useEffect(() => {

        window.innerWidth<=400 ? setN(2) : setN(7)

        window.addEventListener("resize", () => {
            let newN = window.innerWidth<=400 ? 2 : 7
            setN(newN)
            setX(0) 
        })
    }, [])

    // go to product page using product id
    const goTo = (id) => {
        naviagte('/product/'+id)
    }

    // to move to previous/next product 
    const [x, setX] = useState(0)

    const moveLeft = () => {
        x>0 && setX(prev => prev-X)
    }

    const moveRight = () => {
        x<(data.length-n)*X && setX(prev => prev+X)
    }

    return (
        <div className='productGallerySmall'>

            <h2 className='productGallerySmall__title'>
                More items to explore 
            </h2>

            <div className='productGallerySmall__main'>

                <div 
                    className='productGallerySmall__container'
                    style={{transform: `translateX(-${x}px)`}}
                >

                    {data.map(data => (
                        <img
                            src={urlFor(data.img[0])}
                            alt='product image'
                            onClick={()=>goTo(data._id)}
                        />))
                    }

                </div>

            </div>

            <div 
                className={`productGallerySmall__btn btn--left`}
                onClick={moveLeft}
            >

                <RiArrowLeftSLine
                    className={`${x>0 && 'active'}`}
                />
            
            </div>

            <div 
                className='productGallerySmall__btn btn--right'
                onClick={moveRight}
            >
                
                <RiArrowRightSLine
                    className={`${x<(data.length-n)*160 && 'active'}`}
                />
            
            </div>
            
        </div>
    )
}

export default ProductGallerySmall