import Image from 'next/image'
import '../Hero/Hero.css'
import heromobile from '../images/hero-mobile.png'


export default function Hero (){
    return(
        <>
        <section className="hero-banner">
          <Image src={heromobile} alt="fireplace" />
          <div className="banner-container">
            <h1 className="title">
              Discover the <br />
              Perfect Fireplace ...
            </h1>
            <p>
              <span className="consultation">Book consultation:</span>
              <span id="phone-number">0121 345 6789</span>
            </p>
          </div>
        </section>
        
        
        
        </>
    )
}