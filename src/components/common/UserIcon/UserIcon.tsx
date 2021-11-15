import React from "react";
import Image from "../Image/Image";

interface Props {
  handleClick?: () => void;
  cssClass?: string;
  pic?: any;
  availability?: "online" | "away" | "offline";
}
const UserIcon: React.FC<Props> = ({
  handleClick,
  cssClass,
  pic,
  availability,
}) => {
  return (
    <div
      className={`user-icon ${cssClass ? cssClass : null}`}
      onClick={handleClick}
    >
      <Image source={pic || "pic2"} cssClass="user-icon__img" />
      {availability && (
        <span className={`user-icon__availability ${availability}`}></span>
      )}
    </div>
  );
};

interface AvatarIconProps {
  avatar: string;
  cssClass?: string;
}

export const AvatarIcon: React.FC<AvatarIconProps> = ({
  cssClass = "",
  avatar,
}) => {
  return <h3 className={`avatar__icon ${cssClass}`}>{avatar || "BA"}</h3>;
};
export const AvatarIconLarge: React.FC<AvatarIconProps> = ({
  cssClass = "",
  avatar,
}) => (
  <div className="avatar__container">
    <h3 className={`avatar__icon large ${cssClass}`}>{avatar || "BA"}</h3>
  </div>
);

export default UserIcon;
