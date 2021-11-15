import React from "react";
import UserDetailsImage from "./../User/UserDetailsImage";
import Typography from "./../Typography/Typography";
import Button from "./../Button/Button";

interface Props {}
const UserDetails: React.FC<Props> = () => {
  return (
    <>
      <div className="user-details">
        <table className="user-details__table">
          <tbody>
            <tr>
              <td></td>

              <td className="user-details__detail">
                <div className="flex-r-aicenter">
                  <UserDetailsImage img="pic10" />
                  <div className="m-l-20px">
                    <div>
                      <Typography
                        type="h5"
                        text="Chester Martin"
                        cssClass="head-9"
                      />
                      <Typography
                        type="p"
                        text="UI/UX Designer"
                        cssClass="p-1"
                      />
                    </div>
                    <div className="m-t-10px flex-r">
                      <Button
                        cssClass="btn btn--primary btn--xxsmall btn-icon-n-text m-r-10px"
                        withIcon={true}
                        iconClass="icon-message-small m-r-7px"
                        btnIcon="icon-message-small"
                        text="Message"
                      />
                      <Button
                        cssClass="btn btn-icon m-r-10px"
                        icon="icon-phone-right"
                        iconClass="icon-phone-right"
                      />
                      <Button
                        cssClass="btn btn-icon m-r-10px"
                        icon="icon-share-screen"
                        iconClass="icon-share-screen"
                      />
                      <Button
                        cssClass="btn btn-icon"
                        icon="icon-tri-dot"
                        iconClass="icon-tri-dot"
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td className="user-details__title-container">
                <Typography
                  type="h6"
                  cssClass="user-details__title"
                  text="Bio"
                />
              </td>
              <td className="user-details__detail">
                <Typography
                  type="p"
                  cssClass="user-details__detail-text"
                  text=" When I first got into the advertising, I was looking for the
              magical combination that would put website into the top search
              engine rankings"
                />
              </td>
            </tr>
            <tr>
              <td className="user-details__title-container">
                <Typography
                  type="p"
                  cssClass="user-details__title"
                  text="Email"
                />
              </td>
              <td className="user-details__detail">
                <div className="flex-r-jcbetween">
                  <div>
                    <Typography
                      type="p"
                      cssClass="user-details__detail-text"
                      text=" johanna.stevens@gmail.com"
                    />
                    <Typography
                      type="p"
                      cssClass="user-details__detail-text"
                      text=" johanna.stevens@gmail.com"
                    />
                  </div>
                  <Typography
                    type="p"
                    cssClass="user-details__label"
                    text="Primary"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="user-details__title-container">
                <Typography
                  type="p"
                  cssClass="user-details__title"
                  text="Dial"
                />
              </td>
              <td className="user-details__detail">
                <div className="flex-r-jcbetween">
                  <Typography
                    type="p"
                    cssClass="user-details__detail-text"
                    text=" j.stevens@ymsg.com"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="user-details__title-container">
                <Typography
                  type="p"
                  cssClass="user-details__title"
                  text="Meeting"
                />
              </td>
              <td className="user-details__detail">
                <div className="flex-r-jcbetween">
                  <Typography
                    type="p"
                    cssClass="user-details__detail-text"
                    text=" http://go.betacall.com/meet/j.stevens"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="user-details__title-container">
                <Typography
                  type="p"
                  cssClass="user-details__title"
                  text="Phone"
                />
              </td>
              <td className="user-details__detail">
                <div className="flex-r-jcbetween">
                  <div>
                    <Typography
                      type="p"
                      cssClass="user-details__detail-text"
                      text="439-582-1578"
                    />
                    <Typography
                      type="p"
                      cssClass="user-details__detail-text"
                      text="621-770-7689"
                    />
                  </div>
                  <Typography
                    type="p"
                    cssClass="user-details__label"
                    text="Primary"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="user-details__title-container">
                <Typography
                  type="p"
                  cssClass="user-details__title"
                  text="Social"
                />
              </td>
              <td className="user-details__detail">
                <div className="flex-r">
                  <Button
                    cssClass="btn btn-icon user-details__social-btn"
                    icon="icon-facebook-sm"
                    iconClass="icon-facebook-sm"
                  />
                  <Button
                    cssClass="btn btn-icon user-details__social-btn"
                    icon="icon-pinterest"
                    iconClass="icon-pinterest"
                  />
                  <Button
                    cssClass="btn btn-icon user-details__social-btn"
                    icon="icon-twitter-sm"
                    iconClass="icon-twitter-sm"
                  />
                  <Button
                    cssClass="btn btn-icon user-details__social-btn"
                    icon="icon-linkedin"
                    iconClass="icon-linkedin"
                  />
                  <Button
                    cssClass="btn btn-icon user-details__social-btn"
                    icon="icon-google-sm"
                    iconClass="icon-google-sm"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserDetails;
