import React from "react";

interface Props {
  width?: string;
  height?: string;
  cssClass?: string;
  pathCssClass?: string;
}
const IconBigPlay: React.FC<Props> = ({
  width,
  height,
  cssClass,
  pathCssClass,
}) => {
  return (
    <svg
      width={width || "115"}
      height={height || "89"}
      className={`icon-big-play ${cssClass}`}
      viewBox="0 0 115 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5" className={pathCssClass}>
        <rect x="14" y="10" width="101" height="79" fill="#F2F2F2" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 80H101V0H0V80ZM100.581 79.58H0.419087V0.419948H100.581V79.58Z"
          fill="#3F3D56"
        />
        <path d="M36.0589 63L36 22L83 42.4344L36.0589 63Z" fill="#D0CDE1" />
        <path d="M28.0587 63L28 22L75 42.4342L28.0587 63Z" fill="#F6933E" />
        <path
          opacity="0.2"
          d="M71.9933 41L28 60.3647L28.0038 63L75 42.3133L71.9933 41Z"
          fill="black"
        />
      </g>
    </svg>
  );
};

export default IconBigPlay;
