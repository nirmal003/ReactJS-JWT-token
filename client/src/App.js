import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
