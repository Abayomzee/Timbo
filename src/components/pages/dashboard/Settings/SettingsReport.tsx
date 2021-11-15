import React from "react";

import Typography from "./../../../common/Typography/Typography";
import DashboardLayoutOneRight from "../../../common/DashboardLayouts/LayoutOne/DashboardLayoutOneRight";
import Svg from "./../../../common/Svg/Svg";
// import ProgressBar from "./../../../common/ProgressBar/ProgressBar";
import ReportCard from "./../../../common/ReportCard/ReportCard";

interface Props {
  history?: any;
}
const SettingsReport: React.FC<Props> = ({ history }) => {
  return (
    <DashboardLayoutOneRight>
      <div className="flex-r-jcbetween-aicenter m-b-20px">
        <Typography type="h5" text="Reports" cssClass="head-9" />
        <div className="flex-r-aicenter">
          <Svg iconId="icon-calender-sm" cssClass="icon-calender-sm" />
          <Typography
            type="p"
            text="17 Feb 2020 - 17 Mar 2020"
            cssClass="settings-report__date-filter m-l-10px"
          />
        </div>
      </div>
      <div className="settings-report__cards m-b-40px">
        <ReportCard
          title="Call minutes"
          subTitle="Total time spent"
          statValue="10.345"
          progressBarType="ok"
        />
        <ReportCard
          title="Conference calls"
          subTitle="Total time spent"
          statValue="31.500"
          progressBarType="warn"
        />
        <ReportCard
          title="Call members"
          subTitle="Total call participants"
          statValue="248"
          progressBarType="danger"
        />
      </div>

      <div className="settings-report__stats">
        <div className="settings-report__other-stats">
          <div className="settings-report__other-stats--1">
            <div className="flex-r-jcbetween">
              <div>
                <Typography type="h5" text="Top users" cssClass="head-18" />
                <Typography
                  type="p"
                  text="Week to week performance"
                  cssClass="p-1"
                />
              </div>
              <div>
                <Svg
                  iconId="icon-video-calls"
                  cssClass="icon-video-calls m-r-5px"
                />
                <Typography type="span" text="Video calls" cssClass="p-7" />
              </div>
            </div>
            <div className="settings-report__dummy">
              <Typography type="h4" text="Chart" cssClass="" />
            </div>
          </div>
          <div className="settings-report__other-stats--2">
            <div className="flex-r-jcbetween">
              <div>
                <Typography
                  type="h5"
                  text="Most active users"
                  cssClass="head-18"
                />
                <Typography
                  type="p"
                  text="Week to week performance"
                  cssClass="p-1"
                />
              </div>
              <div>
                <Svg
                  iconId="icon-messages-2"
                  cssClass="icon-messages-2 m-r-5px"
                />
                <Typography type="span" text="Messages" cssClass="p-7" />
              </div>
            </div>

            <div className="settings-report__dummy">
              <Typography type="h4" text="Chart" cssClass="" />
            </div>
          </div>
        </div>
        <div className="settings-report__usage-stats">
          <Typography type="h5" text="Usage statistics" cssClass="head-18" />
          <div className="settings-report__dummy">
            <Typography type="h4" text="Chart" cssClass="" />
          </div>
        </div>
      </div>
    </DashboardLayoutOneRight>
  );
};

export default SettingsReport;
