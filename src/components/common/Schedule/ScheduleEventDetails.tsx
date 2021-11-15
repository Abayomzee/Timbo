import React from "react";
import {getDuration,formatDate} from "../../../utils/helpers/formatDate";
import Button from "./../Button/Button";
import InputSimulation from "./../InputSimulation/InputSimulation";
import GridView from "./../GridView/GridView";
import Typography from "./../Typography/Typography";
import UserIcon from "./../UserIcon/UserIcon";

interface Props {scheduleItem:any}
const ScheduleEventDetails: React.SFC<Props> = ({scheduleItem}) => {
  const {hour,minutes,endhour,endMinutes} = getDuration(scheduleItem.started_at,scheduleItem.duration)
  const {month,day, dateNum} = formatDate(scheduleItem.started_at)
  return (
    <div className="scheduled-event__details">
      <div className="flex-r-jcbetween-aicenter m-b-40px">
        <Button
          cssClass="btn btn-icon m-l-10px scheduled-event__action-btn"
          icon="icon-pen"
          iconClass="icon-pen"
        />
        <Button
          cssClass="btn btn-icon m-l-10px scheduled-event__action-btn"
          icon="icon-trash"
          iconClass="icon-trash"
        />
      </div>
      <InputSimulation
        label="Date"
        value={`${day}, ${month} ${dateNum}`}
        icon="icon-calender-dark"
      />
      <GridView grid={2}>
        <InputSimulation label="Date" value={`${hour}:${minutes}`} icon="icon-time-bold" />
        <InputSimulation label="Date" value={`${endhour}:${endMinutes}`} icon="icon-time-bold" />
      </GridView>
      <div className="">
        <Typography
          type="h6"
          text="Shared with"
          cssClass="scheduled-event__label"
        />
        <div className="scheduled-event__participant">
          <UserIcon pic="pic20" cssClass="scheduled-event__user-icon" />
          <UserIcon pic="pic21" cssClass="scheduled-event__user-icon" />
          <UserIcon pic="pic22" cssClass="scheduled-event__user-icon" />
          <Button
            cssClass="btn btn-icon scheduled-event__action-btn"
            icon="icon-backward"
            iconClass="icon-backward"
          />
        </div>
      </div>
      <div className="m-t-20px">
        <Typography type="h6" text="Note" cssClass="scheduled-event__label" />
        <Typography type="p" text="" cssClass="scheduled-event__note">
          {scheduleItem.note}
        </Typography>
      </div>
    </div>
  );
};

export default ScheduleEventDetails;
