import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import EarthInfo from "./earth-info";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/earth/:postId' element={<EarthInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
