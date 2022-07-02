import './PrimeVideoBox.scss'
import { images } from '../../constants'

function PrimeVideoBox() {
  return (
    <div 
        className='primeVideoBox'
        style={{ backgroundImage: `linear-gradient(180deg,#000 0%,transparent 50%,#000), url(${images.prime_video_img})` }}
    >
        
        <h2 className='primeVideoBox__title'>
          Prime video: Recommended for you
        </h2>

        <span className='primeVideoBox__name'>
          the expanse - season 1
        </span>

        <a className='primeVideoBox__link'>
            Start watching on Prime Video
        </a>
        
    </div>
  )
}

export default PrimeVideoBox