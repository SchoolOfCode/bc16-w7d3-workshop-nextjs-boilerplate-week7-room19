/* eslint-disable react/no-unescaped-entities */
import founders1 from "../src/images/foundersImage/founders-1.png";
import founders2 from "../src/images/foundersImage/founders-2.png";
import founders3 from "../src/images/foundersImage/founders-3.png";
import Image from "next/image";

import "./foundersCard.css";

export default function FoundersCard() {
  return (
    <>
      <main>
        <section className="cardSection">
          <div id="card-1">
            <Image src={founders1} alt="craftsman" />
            <h3>Our craftsmanship</h3>
            <p id="card-text">
              Mike and Mandy studied and honed their craft under the fireplace sensei Vik Von Blaze. Nothing gets delivered to a customer without their sign off.
            </p>
          </div>
          <div id="card-2">
            <Image src={founders2} alt="experience" />
            <h3>Our experience</h3>
            <p id="card-text">
              Numbers don't lie - we've been around for 20+ years and have a long list of happy customers who gladly recommend us.
            </p>
          </div>
          <div id="card-3">
            <Image src={founders3} alt="guarantee" />
            <h3>Our guarantee</h3>
            <p id="card-text">
              If you're no 100% satisfied we will fully refund your purchase. Also, we offer free repairs for the first 20 years of ownership. Find that somewhere else!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
