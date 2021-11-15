import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Image from "./../Image/Image";

interface Props {}
const TopNav: React.FC<Props> = () => {
  return (
    <nav className="nav_static-pages">
      <div className="center nav_static-pages__container">
        <Image source="iconWhite" />
        <Link to="#" className="link link--2">
          Pricing
        </Link>
        <Link to="#" className="link link--2">
          FAQs
        </Link>
        <Link to="#" className="link link--2 m-l-auto">
          Download
        </Link>
        <Button
          cssClass="btn btn--primary btn--small radius-20px"
          text="Get started"
        />
      </div>
    </nav>
  );
};

export default TopNav;
