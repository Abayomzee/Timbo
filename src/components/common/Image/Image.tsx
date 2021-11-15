import React from "react";

import images from "./../../../utils/images";

interface Props {
  source: keyof typeof images;
  alt?: string;
  cssClass?: string;
  maxWidth?: string;
  maxHeight?: string;
}

const Image: React.FC<Props> = ({
  source,
  alt = "logo",
  cssClass,
  maxWidth,
  maxHeight,
}) => {
  const styles = {
    maxWidth,
    maxHeight,
  };
  return (
    <img src={images[source]} alt={alt} className={cssClass} style={styles} />
  );
};

export default Image;
