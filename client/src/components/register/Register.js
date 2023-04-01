import React, { useState } from "react";

function Register() {
  const [User, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(User);
    // await axios.post("http://localhost:5000/", User);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="firstName"
          onChange={handleOnChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="lastName"
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
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
}

export default Register;
