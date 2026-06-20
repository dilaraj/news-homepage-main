import './Section1.css'
import heroMobile from '../../assets/images/image-web-3-mobile.jpg'
import heroDesktop from '../../assets/images/image-web-3-desktop.jpg'

export default function Section1() {
    return (
        <div className="section1-container">
            <picture className='hero-img'>
                <source 
                media='(min-width: 768px)'
                srcSet={heroDesktop}
                />
                <img 
                src={heroMobile} 
                alt="Hero Image" 
                />
            </picture>
            <div className="section1-content">
                <span>The Bright Future of Web 3.0?</span>
                <span>
                We dive into the next evolution of the web that claims to put the power of the platforms back into the 
                hands of the poeple. But is it really fulfilling its promise?
                <button className="read-more-btn">read more</button>
                </span>
                
            </div>
        </div>
    )
}