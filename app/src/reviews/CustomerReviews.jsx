"use client";

/* eslint-disable react/no-unescaped-entities */
import "./CustomerReview.css";
import { useState, useEffect } from "react";

export default function CustomerReviews() {
  const [country, setCountry] = useState("England");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://seal-app-336e8.ondigitalocean.app/reviews?country=${country}`
    )
      .then((response) => response.json())
      .then((json) => setReviews(json));
    console.log(reviews);
  }, [country]);

  return (
    <section className="review-container">
      <h1 className="trusted">Trusted.</h1>
      <p>
        We've got thousands of happy customer all over the UK. Choose your
        country to see the latest review:
      </p>
      <section className="button-container">
        <button onClick={() => setCountry("England")} id="england">
          England
        </button>
        <button onClick={() => setCountry("Wales")} id="wales">
          Wales
        </button>
        <button onClick={() => setCountry("Scotland")} id="scotland">
          Scotland
        </button>
      </section>
        {/* {country} */}
      <section >
        <p className="review">"{reviews.text}"</p> 
        <p className="name">{reviews.author} - {reviews.location}</p>  
      </section>
    </section>
  );
}
