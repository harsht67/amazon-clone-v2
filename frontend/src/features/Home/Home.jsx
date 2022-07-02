import './Home.scss'
import ImageSlider from './ImageSlider'
import PrimeVideoBox from './PrimeVideoBox'
import AmazonAppBox from './AmazonAppBox'
import SignInBox from './SignInBox'
import { ProductGallerySmall, ProductGalleryBig } from '../../components'
import ReviewBox from './ReviewBox'
import ProductCard2 from './ProductCard2'
import Poster from './Poster'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { client } from '../../client'

function Home() {

  const [data, setData] = useState([])

  const user = useSelector(state => state.user)

  // fetch product data
  useEffect(() => {
    window.scrollTo(0, 0)

    const query = '*[_type == "products"]'

    client
        .fetch(query)
        .then(data => setData(data))

  }, [])

  return (
    <div className='home'>
        
        <section className='home__imageSlider'>

          <ImageSlider/>
        
        </section>

        <section className='home__row'>

          <section className='home__row1'>

            <PrimeVideoBox/>

            { user.isSignedIn ? <AmazonAppBox/> : <SignInBox/> }            

          </section>

          <section className='home__row2'>

            { data.length>0 && <ProductGallerySmall data={data} /> }
          
          </section>

          <section className='home__row3'>

            <Poster/>

            <ReviewBox/>

            <ProductCard2/>

          </section>
        
          <section className='home__row4'>

            { data.length>0 && 
              <ProductGalleryBig 
                data={data}
                title='Inspired by your browing history' 
              /> 
            }
          
          </section>
        
        </section>


    </div>
  )
}

export default Home