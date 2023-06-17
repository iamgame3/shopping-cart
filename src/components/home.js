/* eslint-disable react/jsx-filename-extension */
import { React } from "react";
import laserCannon from "../images/products/laser-cannon.jpg";

function Home() {
  return (
    <>
      <div className="home-product-showcase">
        <img
          src={laserCannon}
          alt="Giant laser cannon"
          className="home-image"
        />
        <ul className="home-list">
          <li>Home Appliances</li>
          <li>Aircraft</li>
          <li>Doomsday Devices...</li>
        </ul>
      </div>
      <div className="home-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
        bibendum sapien. Donec hendrerit porta mattis. Phasellus consequat
        cursus dignissim. Mauris pulvinar auctor ligula non sagittis. Aliquam
        erat volutpat. Etiam at pretium felis. Aliquam lobortis accumsan auctor.
        Duis feugiat condimentum dignissim. Aliquam blandit quam vestibulum
        turpis elementum tempor. Ut quis nibh nec nibh imperdiet porta ornare in
        nisi. Nullam consectetur mi libero, ac bibendum ante tempus et. Donec
        ullamcorper malesuada justo in consectetur.
      </div>
    </>
  );
}

export default Home;
