import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostPage from "./Pages/PostPage";
import CartPage from "./Pages/CartPage";
import Navi from './Components/Navigation/Navi'

function App() {
  return (
    <Router>
    <Navi />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/post" index element={<PostPage />} />
        <Route path="/cart" index element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
