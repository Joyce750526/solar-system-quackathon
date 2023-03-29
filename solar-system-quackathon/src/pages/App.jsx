import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Planets from "../components/planets";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/planet' element={<Planets />} />
      </Routes>
    </BrowserRouter>
  );
}
