import './ProductGalleryBig.scss'
import { urlFor } from '../../client'
import ProductCard from './ProductCard'

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { useEffect, useState } from 'react'

function ProductGalleryBig(props) {

    const [products, setProducts] = useState(props.data)

    const [data, setData] = useState([])

    // holds current page position 
    const [x, setX] = useState(window.innerWidth<=400 ? 2 : 5)
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(x)

    useEffect(() => {
        setData(products.slice(left, right))

        window.addEventListener("resize", () => {
            let newX = window.innerWidth<=400 ? 2 : 5
            setLeft(0)
            setRight(newX)
            setX(newX)
            setData(products.slice(0, newX))
        })
    }, [])

    // decrement page by 1
    const moveLeft = () => {
        if(left!=0) {
            setData(products.slice(left-x, right-x))
            setLeft(prev => prev-x)
            setRight(prev => prev-x)
        }
    }

    // increment page by 1
    const moveRight = () => {
        if(left+x<products.length) {
            setData(products.slice(left+x, right+x))
            setLeft(prev => prev+x)
            setRight(prev => prev+x)
        }
    }

    return (
    <div className='productGalleryBig'>
        
        <h2 className='productGalleryBig__title'>
            {props.title}
        </h2>

        <div className='productGalleryBig__main'>
            
            { data.map(data => <ProductCard data={data} />) }

        </div>

        <div 
            className={`productGalleryBig__btn btn--left ${left==0 && `btn--unavailable`}`}
            onClick={moveLeft}
        >
            <RiArrowLeftSLine/>
        </div>

        <div 
            className={`productGalleryBig__btn btn--right ${right>=products.length && `btn--unavailable`}`}
            onClick={moveRight}
        >
            <RiArrowRightSLine/>
        </div>

    </div>
  )
}

export default ProductGalleryBig