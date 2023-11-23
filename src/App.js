import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/SignUp";
import Heading from "./Components/Login";
import Home from "./Components/Homepage";
import Main from "./Components/MainPage";
import Mini from "./Components/setti";
import Chess from "./Components/vyom";
import Rocketleague from "./Components/shiv";
import Clash from "./Components/sravan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MainPage" element={<Main />} />
        <Route path="/Login" element={<Heading />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/Mini" element={<Mini />} />
        <Route path="/Chess" element={<Chess />} />
        <Route path="/Rocketleague" element={<Rocketleague />} />
        <Route path="/Clash" element={<Clash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
