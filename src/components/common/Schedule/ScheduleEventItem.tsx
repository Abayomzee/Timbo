import React, { useState } from "react";

import IconBlueTime from "./../SvgIcons/IconBlueTime";
import MeetingDuration from "./../Meeting/MeetingDuration";
import Tag from "./../Tag/Tag";
import Typography from "./../Typography/Typography";
import UserIcon from "./../UserIcon/UserIcon";
import Button from "./../Button/Button";
import ScheduleEventDetails from "./ScheduleEventDetails";

interface Props {scheduleItem:any}
const ScheduleEventItem: React.FC<Props> = ({scheduleItem}) => {
  const [showEventDetails, setShowEventDetails] = useState<boolean>(false);
  return (
    <div className="scheduled-event__item">
      <IconBlueTime
        width={36}
        height={36}
        cssClass="scheduled-event__time-icon"
      />
      <MeetingDuration starting={scheduleItem.started_at} duration={scheduleItem.duration} cssClass="m-l-20px flex-r scheduled-event__duration" />
      <div className="scheduled-event__name">
        <Tag cssClass="tag tag--business" text="Business" />
        <Typography
          type="p"
          text={scheduleItem.title}
          cssClass="scheduled-event__title"
        />
      </div>
      <div className="flex-r m-l-auto scheduled-event__item-right">
        <UserIcon pic="pic18" cssClass="scheduled-event__user-icon" />
        <Button
          cssClass="btn btn-icon m-l-10px scheduled-event__action-btn"
          icon="icon-tri-dot"
          iconClass="icon-tri-dot"
          handleClick={() => setShowEventDetails((prevState) => !prevState)}
        />
        {showEventDetails && <ScheduleEventDetails scheduleItem={scheduleItem}/>}
      </div>
    </div>
  );
};

export default ScheduleEventItem;
