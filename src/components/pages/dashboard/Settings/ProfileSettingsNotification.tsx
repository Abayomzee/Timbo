import React from "react";

import Typography from "../../../common/Typography/Typography";
import DashboardLayoutOneRight from "../../../common/DashboardLayouts/LayoutOne/DashboardLayoutOneRight";

import Button from "./../../../common/Button/Button";
import SwitchOption from "./../../../common/SwitchOptions/SwitchOption";

interface Props {
  history?: any;
}
const ProfileSettingsNotification: React.FC<Props> = ({ history }) => {
  return (
    <DashboardLayoutOneRight>
      <Typography type="h5" text="Notifications" cssClass="head-9 m-b-40px" />

      <SwitchOption
        title="Product updates"
        subTitle="Stair Lifts Feel The Freedom Of Your Home"
      />
      <SwitchOption
        title="Events updates"
        subTitle="A Right Media Mix Can Make The Difference"
      />
      <SwitchOption
        title="Comments"
        subTitle="Advertising Relationships Vs Business Decisions"
      />
      <SwitchOption
        title="Notifications"
        subTitle="Creating Remarkable Poster Prints Through"
      />

      <div className="flex-r-jcbetween m-t-120px">
        <div>
          <Button
            cssClass="btn--primary btn--small"
            text="Update Settings"
            type="submit"
          />
          <Button cssClass="btn--grey btn--small m-l-10px" text="Cancel" />
        </div>

        <Button
          cssClass="btn btn--small btn--all-grey btn-icon-n-text"
          withIcon={true}
          btnIcon="icon-trash-sm"
          iconClass="icon-trash-sm btn-icon-n-text__icon"
          text="Deactivate Account"
        />
      </div>
    </DashboardLayoutOneRight>
  );
};

export default ProfileSettingsNotification;
