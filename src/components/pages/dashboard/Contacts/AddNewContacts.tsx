import React from "react";


import {Typography, 
  DashboardLayoutOne, 
  DashboardLayoutOneLeft, 
  DashboardLayoutOneRight,
  UserDetailsImage,
  FormContactInformation,
  IconLink
  } from './../../../common'

import DashboardTopNav from "./../DashboardTopNav";

import IconUserCircle from "./../../../common/SvgIcons/IconUserCircle";
import IconBell from "./../../../common/SvgIcons/IconBell";

interface Props {}
const AddContacts: React.FC<Props> = () => {
  return (
    <>
      <main className="dashboard__main">
        <DashboardTopNav title="Contacts" />

        <DashboardLayoutOne>
          <DashboardLayoutOneLeft
            cssClass="color-2 flex-shrink-0"
            width="33.1rem"
          >
            <UserDetailsImage
              img="pic11"
              cssClass="m-x-auto m-t-30px m-b-15px"
            />

            <Typography
              type="h5"
              text="Chester Martin"
              cssClass="head-9 text-center"
            />
            <Typography
              type="p"
              text="UI/UX Designer"
              cssClass="p-1 text-center m-b-50px"
            />

            <IconLink
              Icon={
                <IconUserCircle
                  cssClass="icon-links__icon"
                  pathCssClass="icon-links__icon-path"
                />
              }
              title="General information"
              subTitle="Profile foto, name & language"
            />
            <IconLink
              Icon={
                <IconBell
                  cssClass="icon-links__icon"
                  pathCssClass="icon-links__icon-path"
                />
              }
              title="Notifications"
              subTitle="Set your email notifications"
            />
          </DashboardLayoutOneLeft>
          <DashboardLayoutOneRight>
            <Typography
              type="h5"
              text="General information"
              cssClass="head-9 m-b-40px"
            />

            <FormContactInformation />
          </DashboardLayoutOneRight>
        </DashboardLayoutOne>
      </main>
    </>
  );
};

export default AddContacts;
