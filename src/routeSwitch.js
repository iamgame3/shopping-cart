/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Store from "./components/store";
import cartIcon from "./images/icons/cart.svg";

function RouteSwitch() {
  const [itemCount, setItemCount] = useState([0]);

  const addItemsToCart = (num) => {
    if (Number.isNaN(num) || num < 0) num = 0;
    if (num > 10) num = 10;
    setItemCount((itemCount[0] += num));
  };

  return (
    <BrowserRouter>
      <div className="nav-bar">
        <Link to=" " className="nav-tab">
          Home
        </Link>
        <Link to="store" className="nav-tab">
          Store
        </Link>
        <div className="nav-tab">
          Cart
          <img src={cartIcon} alt="Icon of a shopping cart" className="icon" />
          <p data-testid="item-count">{itemCount}</p>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/store"
          element={<Store addItemsToCart={addItemsToCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
