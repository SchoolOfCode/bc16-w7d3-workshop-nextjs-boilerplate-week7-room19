/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
"use client";

import "./CustomerReview.css";
import { useState, useEffect } from "react";

export default function CustomerReviews() {
  const [country, setCountry] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://seal-app-336e8.ondigitalocean.app/reviews?country=${country}`
        );
        if (!response.ok) {
          throw new Error(error);
        }
        const result = await response.json();
        setReviews(result);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
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
      <section>
        <p className="review">"{reviews.text}"</p>
        <p className="name">
          {reviews.author} - {reviews.location}
        </p>
      </section>
    </section>
  );
}
