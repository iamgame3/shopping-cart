/* eslint-disable radix */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/jsx-filename-extension */
import { React, useEffect, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import lamp from "../images/products/lamp.jpg";
import stone from "../images/products/stone.jpg";
import privateJet from "../images/products/private-jet.jpg";
import fighterJet from "../images/products/fighter-jet.jpg";
import nuke from "../images/products/nuke.jpg";
import doomsdayDevice from "../images/products/doomsday-device.jpg";

function Store({ addItemsToCart }) {
  Store.propTypes = {
    addItemsToCart: PropTypes.func.isRequired,
  };

  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([
    [lamp, "Lamp", "$19.99"],
    [stone, "Rare Stone", "$69.99"],
    [privateJet, "Private Jet", "$3,999,999.99"],
    [fighterJet, "Fighter Jet", "$19,999,999.99"],
    [nuke, "Thermonuclear Bomb", "$499,999,999.99"],
    [doomsdayDevice, "Doomsday Device", "$999,999,999,999,999.99"],
  ]);

  const createProductCards = () => {
    const store = document.querySelector(".store-container");
    store.replaceChildren();
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      const productCaption = document.createElement("div");
      productCaption.classList.add("product-caption");
      const productName = document.createElement("div");
      productName.textContent = product[1];
      const productPrice = document.createElement("div");
      productPrice.textContent = product[2];
      const productImage = document.createElement("img");
      productImage.src = product[0];
      productImage.classList.add("card-image");
      const productInteraction = document.createElement("div");
      productInteraction.classList.add("product-interaction");
      const quantityInput = document.createElement("input");
      quantityInput.type = "number";
      quantityInput.min = "0";
      quantityInput.max = "10";
      quantityInput.classList.add("quantity-input");
      if (product[1] === "Lamp")
        quantityInput.setAttribute("data-testid", "test-input");
      const addToCartButton = document.createElement("button");
      addToCartButton.textContent = "Add to cart";
      addToCartButton.classList.add("add-to-card-button");
      if (product[1] === "Lamp")
        addToCartButton.setAttribute("data-testid", "test-button");
      addToCartButton.addEventListener("click", () => {
        addItemsToCart(parseInt(quantityInput.value));
        quantityInput.value = 0;
      });
      productCaption.appendChild(productName);
      productCaption.appendChild(productPrice);
      productCard.appendChild(productCaption);
      productCard.appendChild(productImage);
      productInteraction.appendChild(addToCartButton);
      productInteraction.appendChild(quantityInput);
      productCard.appendChild(productInteraction);
      store.appendChild(productCard);
    });
  };

  useEffect(() => {
    createProductCards();
  }, []);

  return <div className="store-container" />;
}

export default Store;
