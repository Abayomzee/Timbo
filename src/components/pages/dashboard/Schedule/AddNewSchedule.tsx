import React from "react";

import DashboardLayoutOne from "../../../common/DashboardLayouts/LayoutOne/DashboardLayoutOne";
import DashboardLayoutOneLeft from "../../../common/DashboardLayouts/LayoutOne/DashboardLayoutOneLeft";
import DashboardLayoutOneRight from "../../../common/DashboardLayouts/LayoutOne/DashboardLayoutOneRight";
import DashboardTopNav from "../DashboardTopNav";
import IconLink from "../../../common/IconLink/IconLink";
import IconUserCircle from "../../../common/SvgIcons/IconUserCircle";
import UserDetailsImage from "./../../../common/User/UserDetailsImage";
import IconBell from "./../../../common/SvgIcons/IconBell";
import Typography from "./../../../common/Typography/Typography";
import FormAddSchedule from "./../../../common/Forms/FormAddSchedule";

interface Props {}
const AddNewSchedule: React.FC<Props> = () => {
  return (
    <>
      <main className="dashboard__main">
        <DashboardTopNav title="Schedule" />

        <DashboardLayoutOne>
          <DashboardLayoutOneLeft
            cssClass="color-2 flex-shrink-0 flex-c-jcbetween"
            width="33.1rem"
          >
            <div>
              <UserDetailsImage
                img="pic11"
                cssClass="m-x-auto m-t-15px m-b-30px"
              />
              <IconLink
                Icon={
                  <IconUserCircle
                    cssClass="icon-links__icon"
                    pathCssClass="icon-links__icon-path"
                  />
                }
                title="General information"
                subTitle="Profile foto, name &amps; language"
                cssClass="active"
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
            </div>
          </DashboardLayoutOneLeft>
          <DashboardLayoutOneRight cssClass="scheduled-event__right-side">
            <Typography
              type="h5"
              text="General information"
              cssClass="head-9 m-b-40px"
            />
            <FormAddSchedule />
          </DashboardLayoutOneRight>
        </DashboardLayoutOne>
      </main>
    </>
  );
};

export default AddNewSchedule;
