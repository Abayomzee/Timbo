import React from "react";

interface Props {
  width?: string;
  height?: string;
  cssClass?: string;
  pathCssClass?: string;
}
const IconUserCircle: React.FC<Props> = ({
  width,
  height,
  cssClass,
  pathCssClass,
}) => {
  return (
    <svg
      width={width ? width : "20"}
      height={height ? height : "20"}
      className={`icon-user-circle ${cssClass}`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathCssClass}
        d="M4.5 13.6523C5.84635 15.6289 7.67969 16.6172 10 16.6172C12.3203 16.6172 14.1536 15.6289 15.5 13.6523C15.4714 12.8503 14.8268 12.1771 13.5664 11.6328C12.306 11.0885 11.1172 10.8164 10 10.8164C8.88281 10.8164 7.69401 11.0885 6.43359 11.6328C5.17318 12.1484 4.52865 12.8216 4.5 13.6523ZM11.9336 4.41406C11.3893 3.86979 10.7448 3.59766 10 3.59766C9.25521 3.59766 8.61068 3.86979 8.06641 4.41406C7.52214 4.95833 7.25 5.60286 7.25 6.34766C7.25 7.09245 7.52214 7.73698 8.06641 8.28125C8.61068 8.82552 9.25521 9.09766 10 9.09766C10.7448 9.09766 11.3893 8.82552 11.9336 8.28125C12.4779 7.73698 12.75 7.09245 12.75 6.34766C12.75 5.60286 12.4779 4.95833 11.9336 4.41406ZM3.51172 3.55469C5.31641 1.75 7.47917 0.847656 10 0.847656C12.5208 0.847656 14.6693 1.75 16.4453 3.55469C18.25 5.33073 19.1523 7.47917 19.1523 10C19.1523 12.5208 18.25 14.6836 16.4453 16.4883C14.6693 18.2643 12.5208 19.1523 10 19.1523C7.47917 19.1523 5.31641 18.2643 3.51172 16.4883C1.73568 14.6836 0.847656 12.5208 0.847656 10C0.847656 7.47917 1.73568 5.33073 3.51172 3.55469Z"
        fill="#8083A3"
      />
    </svg>
  );
};

export default IconUserCircle;