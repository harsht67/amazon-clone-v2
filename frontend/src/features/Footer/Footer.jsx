import './Footer.scss'
import { images } from '../../constants'

function Footer() {
  return (
    <div className='footer'>
        
        <section 
            className='footer__btn'
            onClick={()=>window.scroll(0,0)}
        >
            Back to top
        </section>

        <section className='footer__row1'>

            <section>

                <h3 className='footer__title'>
                    Get to Know Us
                </h3>

                <ul className='footer__items'>
                    <li>about us</li>
                    <li>careers</li>
                    <li>amazon cares</li>
                    <li>gift a smile</li>
                </ul>

            </section>

            <section>

                <h3 className='footer__title'>
                    Connect with Us
                </h3>

                <ul className='footer__items'>
                    <li>facebook</li>
                    <li>twitter</li>
                    <li>instagram</li>
                </ul>

            </section>

        </section>

        <hr/>

        <section className='footer__row2'>

            <img
                src={images.amazon}
                alt='amazon logo'
                className='footer__logo'
            />

        </section>

        <section className='footer__row3'>

            <span>Condition of Use &#38; Sale</span>

            <span>Privacy notice</span>

            <span>&#169; 1996-2022, Amazon.com, Inc</span>

        </section>
    
    </div>
  )
}

export default Footer