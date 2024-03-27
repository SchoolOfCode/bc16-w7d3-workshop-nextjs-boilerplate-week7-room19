import "./Form.css";
import { useReducer } from "react";

const initialState = {
  formData: {
    fullName: "",
    postcode: "",
    address: "",
    city: "",
    phone: "",
    email: "",
  },
  error: false,
};

const reducer = (state, action) => {
  if (action.type === "SET_FULL_NAME") {
    console.log("Setting full name:", action.payload);
    return {
      ...state,
      formData: {
        ...state.formData,
        fullName: action.payload,
      },
    };
  } else {
    console.log("Action type not recognized:", action.type);
    return state;
  }
};

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e) {
    if (e.target.name === "fullName") {
      dispatch({ type: "SET_FULL_NAME", payload: e.target.value });
    }
    // if (e.target.name === "postcode") {
    //   setPostcode(e.target.value);
    // }
    // if (e.target.name === "address") {
    //   setAddress(e.target.value);
    // }
    // if (e.target.name === "city") {
    //   setCity(e.target.value);
    // }
    // if (e.target.name === "phone") {
    //   setPhone(e.target.value);
    // }
    // if (e.target.name === "email") {
    //   setEmail(e.target.value);
    // }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!e.target.name) {
      setError(true);
      return;
    }

    setError(false);
  }

  return (
    <div>
      <h1 className="title1">Design Booking</h1>
      <p>Personal Information:</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="div1">
          <ul>
            <li>
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={state.formData.fullName}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              <label htmlFor="postcode">Postcode</label>
              <input
                id="postcode"
                type="text"
                name="postcode"
                value={state.formData.postcode}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              <label htmlFor="address">House/Flat Number and Street Name</label>
              <input
                id="address"
                type="text"
                name="address"
                value={state.formData.address}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                name="city"
                value={state.formData.city}
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
                value={state.formData.phone}
                onChange={handleChange}
              ></input>
            </li>
            <li>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="text"
                name="email"
                value={state.formData.email}
                onChange={handleChange}
              ></input>
            </li>
          </ul>
        </div>
      </form>
      <button className="btn" type="submit" onClick={handleSubmit}>
        Request Design Consultation
      </button>
    </div>
  );
}
