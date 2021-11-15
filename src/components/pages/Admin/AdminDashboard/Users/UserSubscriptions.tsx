import React from "react";
import Typography from "./../../../../common/Typography/Typography";

interface Props {}
const UserSubscriptions: React.FC<Props> = () => {
  return (
    <>
      <section className="user-details__data-2">
        <Typography
          type="h5"
          text="Payment details"
          cssClass="head-9 m-b-20px"
        />
        <div className="billing-details__container">
          <div className="billing-details__row">
            <Typography
              type="h6"
              text="Payment method"
              cssClass="p-2 billing-details"
            />
            <div className="flex-r-aicenter">
              <Typography
                type="h6"
                text="MasterCard ending in 4078, exp: 08/2020"
                cssClass="p-2"
              />
              <Typography type="p" text="Update" cssClass="p-8 m-l-15px" />
            </div>
          </div>
          <div className="billing-details__row">
            <Typography
              type="h6"
              text="Billing period"
              cssClass="p-2 billing-details"
            />
            <div className="flex-r-aicenter">
              <Typography type="h6" text="Plan billed monthly" cssClass="p-2" />
              <Typography type="p" text="Update" cssClass="p-8 m-l-15px" />
            </div>
          </div>
          <div className="billing-details__row">
            <Typography
              type="h6"
              text="License keys"
              cssClass="p-2 billing-details"
            />
            <div className="flex-r-aicenter">
              <Typography
                type="p"
                text="Redeem a license key"
                cssClass="p-8 m-l-15px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="user-details__about">
        <Typography
          type="h5"
          text="Recent payments"
          cssClass="head-9 m-b-20px"
        />
        <div className="billing-details__container">
          <div className="billing-details__row">
            <div className="flex-r-aicenter">
              <Typography
                type="h6"
                text="21 Oct 2018"
                cssClass="p-2 billing-details"
              />
              <Typography
                type="h6"
                text="CRM Pro (9/21/2018 to 10/21/2019)"
                cssClass="p-9 m-l-30px"
              />
            </div>
            <div className="flex-r-aicenter">
              <Typography type="h6" text="$34.00" cssClass="p-6" />
              <Typography type="p" text="Invoice" cssClass="p-8 m-l-15px" />
            </div>
          </div>

          <div className="billing-details__row">
            <div className="flex-r-aicenter">
              <Typography
                type="h6"
                text="21 Oct 2018"
                cssClass="p-2 billing-details"
              />
              <Typography
                type="h6"
                text="CRM Pro (9/21/2018 to 10/21/2019)"
                cssClass="p-9 m-l-30px"
              />
            </div>
            <div className="flex-r-aicenter">
              <Typography type="h6" text="$34.00" cssClass="p-6" />
              <Typography type="p" text="Invoice" cssClass="p-8 m-l-15px" />
            </div>
          </div>

          <div className="billing-details__row">
            <div className="flex-r-aicenter">
              <Typography
                type="h6"
                text="21 Oct 2018"
                cssClass="p-2 billing-details"
              />
              <Typography
                type="h6"
                text="CRM Pro (9/21/2018 to 10/21/2019)"
                cssClass="p-9 m-l-30px"
              />
            </div>
            <div className="flex-r-aicenter">
              <Typography type="h6" text="$34.00" cssClass="p-6" />
              <Typography type="p" text="Invoice" cssClass="p-8 m-l-15px" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserSubscriptions;
