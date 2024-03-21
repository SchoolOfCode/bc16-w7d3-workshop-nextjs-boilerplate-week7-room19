import howItWorks1 from "../images/how-it-works-1.png";
import howItWorks2 from "../images/how-it-works-2.png";
import howItWorks3 from "../images/how-it-works-3.png";
import Image from "next/image";

import "../Cards/Card.css";

export default function Card() {
  return (
    <>
      <main>
        <div>
          {" "}
          <h2 id="cards-h2">How it works.</h2>
        </div>
        <section className="cardSection">
          <div id="card-1">
            <Image src={howItWorks1} alt="living-room" />
            <h3>Give us a call ...</h3>
            <p id="card-text">
              Call us and book in a Design Consultation on a date and time to
              suit you.
            </p>
          </div>
          <div id="card-2">
            <Image src={howItWorks2} alt="assessment" />
            <h3>We come to you ...</h3>
            <p id="card-text">
              We come to your home to do an assessment of the space and to your
              style preference.
            </p>
          </div>
          <div id="card-3">
            <Image src={howItWorks3} alt="recommendation" />
            <h3>We recommend ...</h3>
            <p id="card-text">
              We send you a bespoke set ot fireplace recommendation.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
