import React, { useState } from "react";

// Custom Hooks
import useActiveTabpane from "../../../../../utils/hooks/useActiveTabpane";

import Typography from "./../../../../common/Typography/Typography";
import UserIcon from "./../../../../common/UserIcon/UserIcon";
import Button from "./../../../../common/Button/Button";
import SearchInput from "./../../../../common/SearchInput/SearchInput";
import Image from "./../../../../common/Image/Image";
import Switch from "./../../../../common/Switch/Switch";
import UserPersonalInfo from "./UserPersonalInfo";
import UserActivities from "./UserActivities";
import UserSubscriptions from "./UserSubscriptions";

interface Props {}
const UserDetails: React.FC<Props> = () => {
  const [switchActive, setSwitchActive] = useState<boolean>(false);
  const [activeIndex, setActivePane] = useActiveTabpane(0);

  const toggleSwitch = () => setSwitchActive((prevState) => !prevState);

  const tabsBtn = ["Personal Information", "Activities", "Subscription"];
  const tabsContent = [
    <UserPersonalInfo key={0} />,
    <UserActivities key={1} />,
    <UserSubscriptions key={2} />,
  ];
  return (
    <section className="admin-layout__content">
      <nav className="admin-layout__top-nav">
        <Typography text="Users" type="h5" cssClass="head-21" />
        <div className="admin-layout__top-nav__actions">
          <SearchInput />
          <Button
            cssClass="btn btn-icon admin-layout__btn"
            icon="icon-notification"
            iconClass="icon-notification"
          />
          <UserIcon pic="pic25" cssClass="admin-layout__user-icon" />
        </div>
      </nav>
      <section className="admin-layout__section">
        <section className="user-details__container">
          <section className="user-details__top">
            <div className="flex-r-aicenter">
              <div className="user-details__image">
                <Image source="pic10" cssClass="image-fit circle-radius" />
              </div>
              <div className="m-l-20px">
                <Typography
                  type="h3"
                  text="Kathryn Murphy"
                  cssClass="head-22"
                />
                <Typography type="span" text="Kathryn Murphy" cssClass="p-10" />
              </div>
            </div>
            <div className="flex-r-aicenter">
              <Switch
                handleClick={() => toggleSwitch()}
                checked={switchActive}
                cssClass="bg-red"
              />
              <Typography
                type="span"
                text="Suspend account"
                cssClass="p-18 m-l-10px"
              />
            </div>
          </section>

          <section className="admin-layout__tab-navigator">
            {tabsBtn.map((btn, index) => (
              <button
                key={index}
                onClick={() => setActivePane(index)}
                className={`admin-layout__tab-btn ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                {btn}
              </button>
            ))}
          </section>
          <section className="admin-layout__tabs-container">
            {tabsContent.map((content, index) =>
              index === activeIndex ? content : null
            )}
          </section>
        </section>
      </section>
    </section>
  );
};

export default UserDetails;
