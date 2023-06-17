/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Store from "./components/store";
import cartIcon from "./images/icons/cart.svg";

function RouteSwitch() {
  return (
    <BrowserRouter>
      <div className="nav-bar">
        <Link to="home" className="nav-tab">
          Home
        </Link>
        <Link to="store" className="nav-tab">
          Store
        </Link>
        <div className="nav-tab">
          Cart
          <img src={cartIcon} alt="Icon of a shopping cart" className="icon" />
        </div>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
