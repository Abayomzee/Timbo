import React from "react";
import UserIcon from "./../UserIcon/UserIcon";
import Typography from "./../Typography/Typography";
import Tag from "./../Tag/Tag";
import Button from "./../Button/Button";

interface Props {
  pic?: any;
  name?: string;
}
const TeamAndUserSettings: React.SFC<Props> = ({ pic, name }) => {
  return (
    <div className="team-and-user-settings flex-r-aicenter">
      <div className="flex-r-aicenter">
        <UserIcon pic={pic ? pic : "pic21"} cssClass="small" />
        <Typography
          type="h6"
          text={name ? name : "Nicholas Gordon"}
          cssClass="head-7 m-l-10px"
        />
      </div>
      <Tag text="Business" cssClass="tag--business m-l-auto" />
      <Button
        cssClass="btn btn-icon m-l-10px small"
        icon="icon-tri-dot"
        iconClass="icon-tri-dot"
      />
    </div>
  );
};

export default TeamAndUserSettings;
