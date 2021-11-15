import React from "react";
import Typography from "../Typography/Typography";

interface Props {}
const IndexHeader: React.FC<Props> = () => {
  return (
    <header className="header__index-page">
      <div className="center text-center">
        <Typography
          type="h3"
          text="Conferencing refactored"
          cssClass="head-27 m-b-20px"
        />
        <Typography
          type="p"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          cssClass="p-19 index-page__sub-heading"
        />
      </div>
    </header>
  );
};

export default IndexHeader;
