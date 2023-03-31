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
        <Route
          path='/earth/:postId'
          element={<PlaceholderInfo planet='earth' />}
        />
        <Route
          path='/mars/:postId'
          element={<PlaceholderInfo planet='mars' />}
        />
        <Route
          path='/jupiter/:postId'
          element={<PlaceholderInfo planet='jupiter' />}
        />
        <Route
          path='/saturn/:postId'
          element={<PlaceholderInfo planet='saturn' />}
        />
        <Route
          path='/uranus/:postId'
          element={<PlaceholderInfo planet='uranus' />}
        />
        <Route
          path='/neptune/:postId'
          element={<PlaceholderInfo planet='neptune' />}
        />
      </Routes>
    </BrowserRouter>
  );
}
