import { IoStar, IoStarHalf } from 'react-icons/io5'

function Rating({rating=0}) {
    return (
        <div>

            { Array(Math.floor(rating)).fill().map(x => (
                <IoStar
                    className='ratingIcon'
                />
            )) }

            { (rating%10) != 0 &&  
                <IoStarHalf
                    className='ratingIcon'
                /> 
            }

        </div>
  )
}

export default Rating