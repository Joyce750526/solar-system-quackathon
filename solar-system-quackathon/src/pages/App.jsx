import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import PlaceholderInfo from "./placeholder-info";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/mercury/:postId'
          element={<PlaceholderInfo planet='mercury' />}
        />
        <Route
          path='/venus/:postId'
          element={<PlaceholderInfo planet='venus' />}
        />
      </Routes>
    </BrowserRouter>
  );
}
