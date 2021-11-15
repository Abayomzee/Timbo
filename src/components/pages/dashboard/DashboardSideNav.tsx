import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

//custom import
import {Image} from "../../common";
import Svg from "../../common/Svg/Svg";

interface Props {}
const DashboardSideNav: React.FC<Props> = () => {
  const match = useRouteMatch("/user");
  const url = match?.url;
  return (
    <aside className="dashboard__side-nav">
      <Link to={`${url}/dashboard`}>
        
        <Image source="iconLogo" cssClass="dashboard__nav-logo" />
      </Link>
      <nav className="dashboard__navs">
        <Link to={`${url}/dashboard`} className="dashboard__nav">
          <span className="dashboard__nav-indicator ok"></span>
          <Svg iconId="icon-home" cssClass="dashboard__navs-icon" />
        </Link>
        <Link to={`${url}/messages`} className="dashboard__nav">
          <Svg iconId="icon-messages" cssClass="dashboard__navs-icon" />
        </Link>
        <Link to={`${url}/calls`} className="dashboard__nav">
          <Svg iconId="icon-call" cssClass="dashboard__navs-icon" />
        </Link>
        <Link to={`${url}/conference`} className="dashboard__nav">
          <span className="dashboard__nav-indicator warn"></span>
          <Svg iconId="icon-conference" cssClass="dashboard__navs-icon" />
        </Link>
        <Link to={`${url}/contacts`} className="dashboard__nav">
          <Svg iconId="icon-contacts" cssClass="dashboard__navs-icon" />
        </Link>
        <Link to={`${url}/share-new-video`} className="dashboard__nav">
          <span className="dashboard__nav-indicator ok"></span>
          <Svg iconId="icon-recordings" cssClass="dashboard__navs-icon" />
        </Link>
        <Link to={`${url}/schedule`} className="dashboard__nav">
          <Svg iconId="icon-schedule" cssClass="dashboard__navs-icon" />
        </Link>
        <Link to={`${url}/settings`} className="dashboard__nav">
          <Svg iconId="icon-settings" cssClass="dashboard__navs-icon" />
        </Link>
      </nav>
    </aside>
  );
};

export default DashboardSideNav;
