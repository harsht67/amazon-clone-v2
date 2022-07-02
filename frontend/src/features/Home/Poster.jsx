// styles
import './Poster.scss'
import { images } from '../../constants'

function Poster() {
  return (
    <div className='poster'>
     
        <h2 className='poster__title'>
            Up to 70% off | Clearance store
        </h2>

        <img
            src={images.home_poster_img}
            alt='poster image'
            className='poster__img'
        />

        <span className='poster__link'>
            see more
        </span>
    
    </div>
  )
}

export default Poster