import { useState } from 'react'
import '../style/Slider.css'
import heroImage1 from '../images/mobile-image-hero-1.jpg'
import heroImage2 from '../images/mobile-image-hero-2.jpg'
import heroImage3 from '../images/mobile-image-hero-3.jpg'
import angleLeft from '../images/icon-angle-left.svg'
import arrow from '../images/icon-arrow.svg'
import angleRight from '../images/icon-angle-right.svg'

function Slider() {
    const [image, setImage] = useState(heroImage1)

    const nextImage = () => {
        if (image === heroImage1) {
            setImage(heroImage2)
        } else if (image === heroImage2) {
            setImage(heroImage3)
        } else if (image === heroImage3) {
            setImage(heroImage1)
        }
    }
    const prevImage = () => {
        if (image === heroImage1) {
            setImage(heroImage3)
        } else if (image === heroImage2) {
            setImage(heroImage1)
        } else if (image === heroImage3) {
            setImage(heroImage2)
        }
    }

    return <>
        <div className='slider' style={{ backgroundImage: `url(${image})` }}>
            <div className='buttonGroup'>
                <button onClick={() => prevImage()}><img src={angleLeft} alt="Arrow pointing left" /></button>
                <button onClick={() => nextImage()}><img src={angleRight} alt="Arrow pointing right" /></button>
            </div>
        </div>

        <div className='container heroText'>
            <h2>
                {image === heroImage1 && 'Discover innovative ways to decorate'}
                {image === heroImage2 && 'We are available all across the globe'}
                {image === heroImage3 && 'Manufactured with the best materials'}
            </h2>
            <p>
                {image === heroImage1 && 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'}
                {image === heroImage2 && '  With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we\’re in most major cities throughout the country. Find the branc nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.'}
                {image === heroImage3 && 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'}
            </p>

            <button>SHOP NOW <img src={arrow} alt="" /></button>
        </div>
    </>
}

export default Slider