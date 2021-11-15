import React, { useState } from "react";

import Typography from "./../../../common/Typography/Typography";
import DashboardLayoutOne from "../../../common/DashboardLayouts/LayoutOne/DashboardLayoutOne";
import DashboardLayoutOneLeft from "../../../common/DashboardLayouts/LayoutOne/DashboardLayoutOneLeft";
import DashboardLayoutOneRight from "../../../common/DashboardLayouts/LayoutOne/DashboardLayoutOneRight";
import Svg from "./../../../common/Svg/Svg";
import Image from "./../../../common/Image/Image";
import FormStartNewConferenceCall from "../../../common/Forms/FormStartNewConferenceCall";
import CallVisibility from "./../../../common/CallVisibility/CallVisibility";
import DashboardTopNav from "./../DashboardTopNav";
import Button from "./../../../common/Button/Button";
import ModalJoinMeetingWithLink from "./../../../common/Modals/ModalJoinMeetingWithLink";

// Amazon chime shii

interface Props {}
const ConferenceEmpty: React.FC<Props> = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <main className="dashboard__main">
        <DashboardTopNav title="Conference" />

        <DashboardLayoutOne>
          <DashboardLayoutOneLeft>
            <aside className="prev-calls-list">
              <Typography
                type="p"
                cssClass="para-1 m-b-10px"
                text="Search for a call"
              />
              <div className="prev-calls-list__search m-b-20px">
                <Typography
                  type="h3"
                  text="Name, email or phone number"
                  cssClass="head-6"
                />
                <Svg iconId="icon-lens" cssClass="icon-lens" />
              </div>

              <Svg
                cssClass="img-calls-empty-space"
                iconId="img-calls-empty-space"
              />
            </aside>
          </DashboardLayoutOneLeft>
          <DashboardLayoutOneRight>
            <div className="flex-r-jccenter">
              <div className="empty-state">
                <Image source="pic5" cssClass="empty-state__conference-img" />
                <Typography
                  text="Start new conference call"
                  type="h3"
                  cssClass="head-4 text-center m-b-10px"
                />
                <Typography
                  text="Start new conversation with an existing contact or invite"
                  type="p"
                  cssClass="head-5 text-center"
                />
                <Typography
                  text="anyone with the link"
                  type="p"
                  cssClass="head-5 text-center m-b-35px"
                />

                <FormStartNewConferenceCall />
                <div className="flex-r-jccenter-aicenter m-t-20px text-center pointer bbb">
                  <Button
                    cssClass="btn-total-naked btn--xxxsmall btn-join-meeting"
                    text="🖐🏻 Click here to join a meeting"
                    handleClick={() => setShowModal(true)}
                  />
                </div>
                <CallVisibility />
              </div>
            </div>
          </DashboardLayoutOneRight>
        </DashboardLayoutOne>

        {showModal && (
          <ModalJoinMeetingWithLink handleClick={() => setShowModal(false)} />
        )}
      </main>
    </>
  );
};

export default ConferenceEmpty;
