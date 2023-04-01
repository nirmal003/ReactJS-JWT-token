import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const Navigate = useNavigate();
  return (
    <div className="App">
      <button onClick={() => Navigate("/register")}>Create Account</button>
      <span>or</span>
      <button onClick={() => Navigate("/login")}>LogIn</button>
    </div>
  );
}

export default Home;
