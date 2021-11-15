import React from "react";
import { Link } from "react-router-dom";

import Typography from "./../../../common/Typography/Typography";
import DashboardLayoutOneLeft from "../../../common/DashboardLayouts/LayoutOne/DashboardLayoutOneLeft";
import DashboardLayoutOneRight from "../../../common/DashboardLayouts/LayoutOne/DashboardLayoutOneRight";
import Svg from "./../../../common/Svg/Svg";
import Image from "./../../../common/Image/Image";
import UserContact from "./../../../common/Contact/UserContact";
import Button from "./../../../common/Button/Button";

interface Props {
  contacts?: any;
}
const ContactList: React.FC<Props> = ({ contacts }) => {
  return (
    <>
      <DashboardLayoutOneLeft>
        <aside className="prev-calls-list">
          <Typography
            type="p"
            cssClass="para-1 m-b-10px"
            text="Search for a call"
          />
          <div className="prev-calls-list__search m-b-50px">
            <Typography
              type="h3"
              text="Name, email or phone number"
              cssClass="head-6"
            />
            <Svg iconId="icon-lens" cssClass="icon-lens" />
          </div>

          {contacts.map((contact: any, index: any) => (
            <UserContact key={index} userDetail={contact} />
          ))}
        </aside>
      </DashboardLayoutOneLeft>
      <DashboardLayoutOneRight>
        <div className="flex-r-jccenter">
          <div className="empty-state">
            <Image
              source="pic5"
              maxWidth="23.1rem"
              maxHeight="19.81rem"
              cssClass="empty-state__conference-img"
            />
            <Typography
              text="You have selected multiple account"
              type="p"
              cssClass="head-5 text-center"
            />
            <Typography
              text="apply required bulk action"
              type="p"
              cssClass="head-5 text-center m-b-35px"
            />

      
            <Link to="/user/add-contact" className="text-deco-none">
            <Button
              cssClass="btn btn--primary btn--small btn-center btn-icon-n-text"
              withIcon={true}
              iconClass="icon-tri-dot-vertical m-r-5px"
              btnIcon="icon-tri-dot-vertical"
              text="Add Contact"
            />
            </Link>

            <Button
              cssClass="btn btn-icon-naked btn--small btn-center btn-icon-n-text m-t-90px"
              withIcon={true}
              iconClass="icon-cancel-arrow m-r-5px"
              btnIcon="icon-cancel-arrow"
              text="Deselect All"
            />
          </div>
        </div>
      </DashboardLayoutOneRight>
    </>
  );
};

export default ContactList;
