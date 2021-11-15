import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import UserIcon from "./../UserIcon/UserIcon";
import Typography from "./../Typography/Typography";

interface Props {
  meetingId?: any;
}
const PreviousCall: React.FC<Props> = ({ meetingId }) => {
  const match = useRouteMatch("/user/calls");
  const path = match?.path;
  return (
    <Link to={`${path}/${meetingId}`} className="link">
      <div className="prev-call">
        <UserIcon availability="offline" />
        <div className="prev-call__name-number m-l-15px">
          <Typography type="h3" text="Bradley Malone" cssClass="head-7" />
          <Typography type="p" text="933-219-7611" cssClass="p-2" />
        </div>
        <div className="prev-call__date-time m-l-auto m-l-15px">
          <Typography type="h3" text="30 Jan 2020" cssClass="head-8" />
          <Typography type="p" text="11:15" cssClass="p-2 text-right " />
        </div>
      </div>
    </Link>
  );
};

export default PreviousCall;
