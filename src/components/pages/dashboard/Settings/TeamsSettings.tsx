import React from "react";

import Typography from "./../../../common/Typography/Typography";
import DashboardLayoutOneRight from "../../../common/DashboardLayouts/LayoutOne/DashboardLayoutOneRight";
import Button from "./../../../common/Button/Button";
import TeamAndUserSettings from "./../../../common/TeamAndUserSettings/TeamAndUserSettings";

interface Props {
  history?: any;
}
const TeamsSettings: React.FC<Props> = ({ history }) => {
  return (
    <DashboardLayoutOneRight>
      <div className="flex-r-jcbetween-aicenter m-b-40px">
        <Typography type="h5" text="Teams & Users" cssClass="head-9" />

        <div className="flex-r-aicenter">
          <Button cssClass="btn--grey btn--xxsmall m-l-10px" text="All" />
          <Button
            cssClass="btn--grey btn--xxsmall btn--naked m-l-10px"
            text="Business"
          />
          <Button
            cssClass="btn--grey btn--xxsmall btn--naked m-l-10px"
            text="Private"
          />
          <Button
            cssClass="btn btn-icon m-l-10px"
            icon="icon-plus-shadow"
            iconClass="icon-plus-shadow"
          />
        </div>
      </div>

      <TeamAndUserSettings />
      <TeamAndUserSettings pic="pic20" name="Bradley Malone" />
      <TeamAndUserSettings pic="pic22" name="Ernest Mason" />
      <TeamAndUserSettings pic="pic18" name="Marvin Lambert" />
      <TeamAndUserSettings pic="pic23" name="Teresa Lloyd" />
      <TeamAndUserSettings pic="pic19" name="Fred Haynes" />

      <div className="flex-r-jcbetween m-t-200px">
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

export default TeamsSettings;
