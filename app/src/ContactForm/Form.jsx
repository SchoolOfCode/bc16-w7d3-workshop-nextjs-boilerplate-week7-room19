import "./Form.css";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleChange(e) {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "postcode") {
      setPostcode(e.target.value);
    }
    if (e.target.name === "address") {
      setAddress(e.target.value);
    }
    if (e.target.name === "city") {
      setCity(e.target.value);
    }
    if (e.target.name === "phone") {
      setPhone(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !postcode || !address || !city || !phone || !email) {
      setError("Error all fields are required - some missing.");
      return;
    }
    console.log("Form submitted:");
    console.log("Name:", name);
    console.log("Postcode:", postcode);
    console.log("Address:", address);
    console.log("City:", city);
    console.log("Phone:", phone);
    console.log("Email:", email);
    setError("");
  }

  return (
    <div>
      <h1 className="title1">Design Booking</h1>
      <p>Personal Information:</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="div1">
          <ul>
            <li>
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              <label htmlFor="postcode">Postcode</label>
              <input
                id="postcode"
                type="text"
                name="postcode"
                value={postcode}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              <label htmlFor="address">House/Flat Number and Street Name</label>
              <input
                id="address"
                type="text"
                name="address"
                value={address}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                name="city"
                value={city}
                onChange={handleChange}
              ></input>
            </li>
          </ul>
        </div>
        <p className="divide">Contact Information:</p>
        <div className="div2">
          <ul>
            <li>
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="text"
                name="phone"
                value={phone}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
              ></input>
            </li>
          </ul>
        </div>
      </form>
      {error && <p className="errorMsg">{error}</p>}
      <button className="btn" type="submit" onClick={handleSubmit}>
        Request Design Consultation
      </button>
    </div>
  );
}
