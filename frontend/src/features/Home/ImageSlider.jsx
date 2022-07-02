import './ImageSlider.scss'
import useInterval from '../../hooks/useInterval'
import { client, urlFor } from '../../client'

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { useState, useEffect } from 'react'

function ImageSlider() {

  const [x, setX] = useState(0)

  const [imgs, setImgs] = useState([])

  useEffect(() => {

    const query = '*[_type == "imageSlider"]'

    client
        .fetch(query)
        .then(data => setImgs(data))

  }, [])

  useInterval(()=>moveRight(), 5000)

  const moveLeft = () => {
    x>0 
      ? setX(prev => prev-100)
      : setX(prev => (imgs.length-1)*100)
  }

  const moveRight = () => {
    x<(imgs.length-1)*100 
      ? setX(prev => prev+100)
      : setX(prev => 0)
  }

  return (
    <div className='imageSlider'>
        
        <section className='imageSlider__container'>
            
            <div 
              className='imageSlider__content'
              style={{transform: `translateX(-${x}%)`}}
            >
            
            {
              imgs?.map(img => (
                <img
                  src={urlFor(img.img)}
                  alt='image slider image'
                  className='imageSlider__img'
                />
              ))
            }
          
          </div>

        </section>

        <RiArrowLeftSLine
            className='imageSlider__btn btn--left'
            onClick={moveLeft}
        />

        <RiArrowRightSLine
            className='imageSlider__btn btn--right'
            onClick={moveRight}
        />


    </div>
  )
}

export default ImageSlider