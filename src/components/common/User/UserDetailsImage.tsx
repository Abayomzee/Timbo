import React from "react";

import Image from "./../Image/Image";

interface Props {
  cssClass?: string;
  img?: any;
}

const UserDetailsImage: React.FC<Props> = ({ cssClass, img }) => {
  return (
    <div className={`user-datails-image ${cssClass}`}>
      <Image source={img} cssClass={`user-datails__img`} />
    </div>
  );
};

export default UserDetailsImage;
