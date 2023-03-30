import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import PlaceholderInfo from "./placeholder-info";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/placeholder-info' element={<PlaceholderInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
