import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/SignUp";
import Heading from "./Components/Login";
import Home from "./Components/Homepage";
import Main from "./Components/MainPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MainPage" element={<Main />} />
        <Route path="/Login" element={<Heading />} />
        <Route path="/SignUp" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
