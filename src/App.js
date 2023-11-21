import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./Components/SignUp";
import Heading from "./Components/Login";
import Home from "./Components/Homepage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Homepage" element={<Home />} />
        <Route path="/Login" element={<Heading />} />
        <Route path="/SignUp" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
