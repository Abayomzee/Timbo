import React, { useState, useEffect } from "react";
// import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";

import MeetingCardsLayout from "./../../common/Meeting/MeetingCardsLayout";
import ModalJoinMeeting from "./../../common/Modals/ModalJoinMeeting";
import MeetingCard from "./../../common/Meeting/MeetingCard";
import DashboardTopNav from "./DashboardTopNav";
import Svg from "../../common/Svg/Svg";
import useDialogHook from "../../../utils/hooks/useDialogHook";
import StartNewChatModal from "./Messages/Modal/StartNewChatModal";
import MeetingContainer from "../../common/Meeting/MeetingContainer";

type Props = {
  history?: any;
};
const DashboardIndex: React.FC<Props> = ({ history }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  //destructure the dialog hook out
  const { open, handleClose, handleOpen } = useDialogHook();

  useEffect(()=>{
    
  })

  return (
    <>
      <main className="dashboard__main">
        <DashboardTopNav title="Dashboard" />
        <MeetingCardsLayout>
          <MeetingCard
            iconId="icon-new-meeting"
            heading="New Meeting"
            subHeading="Set up new meeting"
            handleClick={() => history.push("/user/add-schedule")}
          />
          <MeetingCard
            iconId="icon-join-meeting"
            heading="Join Meeting"
            subHeading="Via invitation link"
            handleClick={() => setShowModal(true)}
          />
          <MeetingCard
            iconId="icon-schedule-meeting"
            heading="Schedule"
            subHeading="Plan a meeting"
            handleClick={() => history.push("/user/add-schedule")}
          />
          <MeetingCard
            iconId="icon-schedule-meeting"
            heading="Start Chat"
            subHeading="Plan a meeting"
            handleClick={handleOpen}
          />
        </MeetingCardsLayout>

        {open && <StartNewChatModal handleClick={handleClose} />}

        <section className="meeting-toggler">
          <span className="meeting-toggle-btn active">Upcoming Meetings</span>
          <span className="meeting-toggle-btn">
            <Svg
              iconId="icon-calender-small"
              cssClass="meeting-toggle-btn__icon"
            />
            View schedule
          </span>
        </section>

        <section className="meeting-status">
          <nav className="meeting-status__toggler">
            <span className="meeting-status__toggle-btn active">
              Upcoming meetings
            </span>
            <span className="meeting-status__toggle-btn">Completed</span>
          </nav>

          <MeetingContainer/>
        </section>
      </main>

      {showModal && (
        <ModalJoinMeeting handleClick={() => setShowModal(false)} />
      )}
    </>
  );
};

export default DashboardIndex;
