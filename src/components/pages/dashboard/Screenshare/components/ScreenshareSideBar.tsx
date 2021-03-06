
import {IconLink} from '../../../../common';
import IconCloud from '../../../../common/SvgIcons/IconCloud';
import IconLocalStorage from '../../../../common/SvgIcons/IconLocalStorage';
import IconPlay from '../../../../common/SvgIcons/IconPlay';



const ScreenshareSideBar = () => {
    return (
        <>
            <IconLink
                Icon={
                  <IconPlay
                    cssClass="icon-links__icon"
                    pathCssClass="icon-links__icon-path"
                  />
                }
                title="All Videos"
                subTitle="All videos unified"
                bagdeText="99"
                cssClass="active"
              />
              <IconLink
              link="/user/recordings/LOCAL"
                Icon={
                  <IconLocalStorage
                    cssClass="icon-links__icon"
                    pathCssClass="icon-links__icon-path"
                  />
                }
                title="Local recordings"
              />
              <IconLink
              link="/user/recordings/MEETING"
                Icon={
                  <IconLocalStorage
                    cssClass="icon-links__icon"
                    pathCssClass="icon-links__icon-path"
                  />
                }
                title="Meeting recordings"
              />
              <IconLink
                Icon={
                  <IconCloud
                    cssClass="icon-links__icon"
                    pathCssClass="icon-links__icon-path"
                  />
                }
                title="Cloud recordings"
              />
        </>
    )
}

export default ScreenshareSideBar
