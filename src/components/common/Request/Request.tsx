import React from "react";

import Typography from "./../Typography/Typography";

interface Props {
    title: string
}
const Request: React.FC<Props> = ({ title }) => {
  return (
    <div className="request">
      <div>
        <Typography type="h6" text={title} cssClass="head-16" />
        <Typography type="p" text="TN: 353942" cssClass=" p-2" />
      </div>
      <Typography type="p" text="Today, 11:00pm" cssClass=" p-2" />
    </div>
  );
};

export default Request;
