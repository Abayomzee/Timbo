import React from "react";
import Image from "./../Image/Image";
import { Link } from "react-router-dom";
import Svg from "../Svg/Svg";

interface Props {}
const Footer: React.FC<Props> = () => {
  return (
    <footer className="footer_static-pages">
      <div className="center nav_static-pages__container">
        <Image source="iconWhite" />
        <Link to="#" className="link link--2">
          Support
        </Link>
        <Link to="#" className="link link--2">
          Download
        </Link>
        <Link to="#" className="link link--2">
          Pricing
        </Link>

        <Svg iconId="icon-futa" cssClass="icon-futa m-l-auto m-r-5px" />
        <Svg iconId="icon-futa" cssClass="icon-futa m-r-5px" />
        <Svg iconId="icon-futa" cssClass="icon-futa m-r-5px" />
        <Svg iconId="icon-futa" cssClass="icon-futa" />
      </div>
    </footer>
  );
};

export default Footer;
