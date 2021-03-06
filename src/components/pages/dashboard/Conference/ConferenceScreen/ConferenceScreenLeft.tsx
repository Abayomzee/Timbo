import React from "react";
import Typography from "../../../../common/Typography/Typography";
import Button from "./../../../../common/Button/Button";
import FormShareConferenceLink from "./../../../../common/Forms/FormShareConferenceLink";

interface Props {
  handleClick?: () => void;
}
const ConferenceScreenLeft: React.FC<Props> = ({ handleClick }) => {
  return (
    <aside className="call-conference-video__left">
      <div className="call-conference-video__left-top">
        <Typography type="h3" text="Conference" cssClass="head-3" />
      </div>
      <div className="call-conference-video__left-body">
        <Button
          cssClass="btn btn-icon m-l-auto m-t-10px"
          icon="icon-times"
          iconClass="icon-times"
          handleClick={handleClick}
        />

        <main className="call-conference-video__left-main m-t-100px animate-fadeOutRight">
          <Typography text="Hello!" type="h3" cssClass="head-4 m-b-5px" />
          <Typography
            text="Are your ready to start new group conference call"
            type="h4"
            cssClass="head-9 m-b-15px"
          />
          <Typography
            text="Start new conversation with an existing contact or invite  anyone with the link"
            type="p"
            cssClass="head-5 m-b-40px"
          />
          <FormShareConferenceLink />
        </main>
      </div>
    </aside>
  );
};

export default ConferenceScreenLeft;
