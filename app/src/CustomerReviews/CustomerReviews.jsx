/* eslint-disable react/no-unescaped-entities */
import "./CustomerReview.css";

export default function CustomerReviews() {
  return (
    <div>
      <h1>Trusted.</h1>
      <p>
        We've got thousands of happy customer all over the UK. Choose your
        country to see the latest review:
      </p>
      <button id="england">England</button>
      <button id="wales">Wales</button>
      <button id="scotland">Scotland</button>
    </div>
  );
}