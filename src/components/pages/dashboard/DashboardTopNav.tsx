import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import Typography from "./../../common/Typography/Typography";
import Button from "./../../common/Button/Button";
import UserIcon from "./../../common/UserIcon/UserIcon";
import IconSettings from "./../../common/SvgIcons/IconSettings";
import IconLogout from "./../../common/SvgIcons/IconLogout";

import useOnClickOutside from "./../../../utils/hooks/useOnClickOutside";

interface Props {
  title: string;
  icon?: string;
}
const DashboardTopNav: React.FC<Props> = ({ title, icon }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>();
  useOnClickOutside(ref, () => setShowDropdown(false));
  return (
    <>
      <nav className="dashboard-top-nav">
        <div className="dashboard-top-nav__col-1">
          <Typography type="h3" text={title} cssClass="head-3" />
        </div>
        <div className="dashboard-top-nav__col-last">
          <Button
            cssClass="btn btn-icon"
            icon={icon ? icon : "icon-search"}
            iconClass={icon ? icon : "icon-search"}
          />
          <div onClick={() => setShowDropdown((prevState) => !prevState)}>
            <UserIcon />
          </div>
        </div>

        {showDropdown && (
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className="dropdown-top-nav animate-slideFromBottom"
          >
            <Link to="/user/profile-settings" className="dropdown-top-nav__link">
              <IconSettings pathCssClass="dropdown-top-nav__link__icon" />
              <span>Profile settings</span>
            </Link>
            <Link to="#" className="dropdown-top-nav__link">
              <IconLogout
                cssClass="dropdown-top-nav__link__icon-logout"
                pathCssClass="dropdown-top-nav__link__icon-logout-path"
              />
              <span>Log out</span>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default DashboardTopNav;
