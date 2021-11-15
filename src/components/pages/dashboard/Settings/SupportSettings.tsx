import React from "react";

import Typography from "../../../common/Typography/Typography";
import DashboardLayoutOneRight from "../../../common/DashboardLayouts/LayoutOne/DashboardLayoutOneRight";
import Button from "./../../../common/Button/Button";
import Svg from "./../../../common/Svg/Svg";
import Request from "./../../../common/Request/Request";

interface Props {
  history?: any;
}
const SupportSettings: React.FC<Props> = ({ history }) => {
  return (
    <DashboardLayoutOneRight padding="0">
      <div className="flex-r support-settings">
        <div className="support-settings__left">
          <Typography type="h5" text="Support" cssClass="head-9 m-b-40px" />

          <div className="link-with-arrow">
            <div>
              <Typography type="h6" text="Requests" cssClass="head-16" />
              <Typography
                type="p"
                text="Send requests for support"
                cssClass=" p-2"
              />
            </div>
            <Svg iconId="icon-arrow-right" cssClass="icon-arrow-right" />
          </div>
        </div>
        <div className="support-settings__right">
          <Typography type="h5" text="Requests" cssClass="head-9 m-b-40px" />
          <Request title="I have an active subscription but I cannot make calls" />
          <Request title="I can’t get all my saved videos" />
          <Request title="I can’t add more than 5 people on my call" />

          <Button
            cssClass="btn--primary btn--small m-t-200px"
            text="Request support"
            type="submit"
          />
        </div>
      </div>
    </DashboardLayoutOneRight>
  );
};

export default SupportSettings;
