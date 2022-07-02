import './ReviewBox.scss'
import { images } from '../../constants'

import { IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5'
import { useState } from 'react'

const arr = [1, 2, 3, 4, 5]

function ReviewBox() {

  const [rating, setRating] = useState(0)

  const changeRating = (e) => {
    let newRating = e.currentTarget.getAttribute('data-val')
    newRating = parseInt(newRating)
    setRating(newRating)
  }

  return (
    <div className='reviewBox'>
        
        <h2 className='reviewBox__title'>
            Review your purchase 
        </h2>

        <img
            src={images.product_img_sd}
            alt='product image'
            className='reviewBox__img'
        />

        <div className='reviewBox__rating'>

          {arr.map(r => (
            <div
              onClick={changeRating}
              data-val={r}
              className='icon'

            >
              { r<=rating ? <IoStar/> : <IoStarOutline/> }
            </div>
          ))
          }

        </div>
        
    </div>
  )
}

export default ReviewBox