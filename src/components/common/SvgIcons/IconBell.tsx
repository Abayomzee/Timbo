import React from "react";

interface Props {
  width?: string;
  height?: string;
  cssClass?: string;
  pathCssClass?: string;
}
const IconBell: React.FC<Props> = ({
  width,
  height,
  cssClass,
  pathCssClass,
}) => {
  return (
    <svg
      width={width || "16"}
      height={height || "19"}
      className={`icon-bell ${cssClass}`}
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathCssClass}
        d="M13.5 12.6523L15.3477 14.5V15.4023H0.652344V14.5L2.5 12.6523V8.09766C2.5 6.66536 2.85807 5.41927 3.57422 4.35938C4.31901 3.29948 5.33594 2.61198 6.625 2.29688V1.65234C6.625 1.27995 6.75391 0.964844 7.01172 0.707031C7.26953 0.420573 7.59896 0.277344 8 0.277344C8.40104 0.277344 8.73047 0.420573 8.98828 0.707031C9.24609 0.964844 9.375 1.27995 9.375 1.65234V2.29688C10.6641 2.61198 11.6667 3.29948 12.3828 4.35938C13.1276 5.41927 13.5 6.66536 13.5 8.09766V12.6523ZM8 18.1523C7.48438 18.1523 7.04036 17.9805 6.66797 17.6367C6.32422 17.2643 6.15234 16.8346 6.15234 16.3477H9.84766C9.84766 16.8346 9.66146 17.2643 9.28906 17.6367C8.91667 17.9805 8.48698 18.1523 8 18.1523Z"
        fill="#8083A3"
      />
    </svg>
  );
};

export default IconBell;
