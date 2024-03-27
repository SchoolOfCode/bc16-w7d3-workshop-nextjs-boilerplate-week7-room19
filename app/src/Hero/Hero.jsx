import Image from "next/image";
import "../Hero/Hero.css";
import heromobile from "../images/hero-mobile.png";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="hero-banner">
        <Image className="hero-img" src={heromobile} alt="fireplace" />
        <div className="banner-container">
          <h1 className="title">
            Discover the <br />
            Perfect Fireplace ...
          </h1>
          <p>
            <Link href="/contact">
              <button className="consultation">Book a consultation</button>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
