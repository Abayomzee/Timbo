import React from "react";
import copy from "copy-to-clipboard";
import { Link } from "react-router-dom";

import Button from "./../Button/Button";
import Image from "./../Image/Image";
import Typography from "./../Typography/Typography";
import useToggle from '../../../utils/hooks/useToggle';




interface Props {
  pic: any;
  mainLink?: string;
  recording: Record<string, any>
}
const VideoShareCard: React.FC<Props> = ({ pic, mainLink, recording }) => {
   const {title = "", description = '', uid = "",} = recording
  const {on, toggle} = useToggle()

  
  const linkToCopy = `/user/recording-description/${uid ?? ""}`
  return (
    <div className="video-share__card">
      <div className="video-share__action">
        <Button
          cssClass="btn btn-icon"
          icon="icon-tri-dot"
          iconClass="icon-tri-dot"
          handleClick={() => toggle()}
        />
        <div
          className={`video-share__action-list ${
            on ? "active" : null
          }`}
        >
          <Link to="#" className="video-share__link">
            Export
          </Link>
          <Link to="#" className="video-share__link" onClick={() => {
           copy(linkToCopy)
           toggle()
          }}>
            Copy Link
          </Link>
          <Link to="#" className="video-share__link">
            Delete
          </Link>
        </div>
      </div>
      <Link to={mainLink ? mainLink : "#"}>
      <div className="video-share__thumbnail">
        <Image source={pic} cssClass="video-share__img" />
      </div>
      </Link>
      <div className="video-share__details">
        <Typography
          type="h5"
          text={title}
          cssClass="head-7"
        />
        <Typography type="p" text="" cssClass="p-3 flex-r-aicenter">
          <Typography
            type="span"
            text={description}
            cssClass="video-share__info"
          />
        
        </Typography>
      </div>
    </div>
  );
};

export default VideoShareCard;
