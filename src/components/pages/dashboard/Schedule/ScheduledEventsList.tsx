import React, {useEffect} from "react";
import { useHistory } from "react-router";
import DashboardLayoutOne from "../../../common/DashboardLayouts/LayoutOne/DashboardLayoutOne";
import DashboardLayoutOneLeft from "../../../common/DashboardLayouts/LayoutOne/DashboardLayoutOneLeft";
import DashboardLayoutOneRight from "../../../common/DashboardLayouts/LayoutOne/DashboardLayoutOneRight";
import DashboardTopNav from "../DashboardTopNav";
import ScheduledEvent from "../../../common/Schedule/ScheduledEvent";
import IconLink from "../../../common/IconLink/IconLink";
import IconLocalStorage from "../../../common/SvgIcons/IconLocalStorage";
import IconUserCircle from "./../../../common/SvgIcons/IconUserCircle";
import IconGroupUser from "./../../../common/SvgIcons/IconGroupUser";
import IconCustomers from "./../../../common/SvgIcons/IconCustomers";
import FormSearchInput from "../../../common/Forms/FormSearchInput";

import scheduleStore from "./../../../../store/scheduleStore";
import LoadingSchedule from "./LoadingSchedule.tsx";

interface Props {}
const ScheduledEventList: React.FC<Props> = () => {
  const history = useHistory();
  const {fetchSchedules, schedules, isLoading} = scheduleStore()
  useEffect(()=>{
    fetchSchedules()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  if(schedules.length === 0 && !isLoading){
    history.push("/user/schedule")
  }
  console.log(schedules);
  
  return (
    <>
      <main className="dashboard__main">
        <DashboardTopNav title="Schedule" />

        <DashboardLayoutOne>
          <DashboardLayoutOneLeft
            cssClass="color-2 flex-shrink-0 flex-c-jcbetween"
            width="33.1rem"
          >
            <div>
              <FormSearchInput />
              <IconLink
                Icon={
                  <IconUserCircle
                    cssClass="icon-links__icon"
                    pathCssClass="icon-links__icon-path"
                  />
                }
                title="All Events"
                subTitle="All mettings unified"
                bagdeText={schedules?.flat()?.length}
                cssClass="active"
              />
              <IconLink
                Icon={
                  <IconLocalStorage
                    cssClass="icon-links__icon"
                    pathCssClass="icon-links__icon-path"
                  />
                }
                title="Business"
              />
              <IconLink
                Icon={
                  <IconGroupUser
                    cssClass="icon-links__icon"
                    pathCssClass="icon-links__icon-path"
                  />
                }
                title="Personal"
              />
              <IconLink
                Icon={
                  <IconCustomers
                    cssClass="icon-links__icon"
                    pathCssClass="icon-links__icon-path"
                  />
                }
                title="Customers"
              />
            </div>
          </DashboardLayoutOneLeft>
          <DashboardLayoutOneRight cssClass='scheduled-event__right-side'>
            {isLoading?<LoadingSchedule />:(schedules.map(schedule=><ScheduledEvent schedule={schedule}/>))
            }
          </DashboardLayoutOneRight>
        </DashboardLayoutOne>
      </main>
    </>
  );
};

export default ScheduledEventList;
