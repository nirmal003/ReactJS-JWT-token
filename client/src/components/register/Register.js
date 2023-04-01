import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [User, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const Navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(User);
    await axios.post("http://localhost:5000/user/signup", User);
    Navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="fullName"
          onChange={handleOnChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleOnChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleOnChange}
          required
        />
        <input
          type="password"
          name="reEnterPassword"
          placeholder="re-EnterPassword"
          onChange={handleOnChange}
          required
        />
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
}

export default Register;
