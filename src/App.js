import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Heading from "./Components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Login" element={<Heading />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
