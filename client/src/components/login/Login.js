import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [User, setUser] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/", User);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
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
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
}

export default Login;
