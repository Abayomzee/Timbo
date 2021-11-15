import React from "react";
import Typography from "./../../../../common/Typography/Typography";

interface Props {}
const UserPersonalInfo: React.FC<Props> = () => {
  return (
    <>
      <section className="user-details__data">
        <div>
          <Typography type="p" text="Full name" cssClass="p-15 m-b-5px" />
          <Typography type="p" text="Cody Fisher" cssClass="p-16" />
        </div>
        <div>
          <Typography type="p" text="Date of birth" cssClass="p-15 m-b-5px" />
          <Typography type="p" text="Dec 30, 1995" cssClass="p-16" />
        </div>
        <div>
          <Typography type="p" text="Email" cssClass="p-15 m-b-5px" />
          <Typography
            type="p"
            text="nevaeh.simmons@example.com"
            cssClass="p-16"
          />
        </div>
        <div>
          <Typography type="p" text="Role" cssClass="p-15 m-b-5px" />
          <Typography type="p" text="UI/UX Designer" cssClass="p-16" />
        </div>
        <div>
          <Typography type="p" text="Phone number" cssClass="p-15 m-b-5px" />
          <Typography type="p" text="(219) 555-0114" cssClass="p-16" />
        </div>
        <div>
          <Typography type="p" text="Location" cssClass="p-15 m-b-5px" />
          <Typography type="p" text="New York, USA" cssClass="p-16" />
        </div>
      </section>

      <section className="user-details__about">
        <div>
          <Typography type="p" text="About me" cssClass="p-15 m-b-5px" />
          <Typography type="p" text="" cssClass="p-16">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Typography>
        </div>
      </section>
    
    </>
  );
};

export default UserPersonalInfo;
