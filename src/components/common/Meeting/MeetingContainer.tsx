import React, {useEffect} from 'react';
import MeetingInADay from './MeetingInADay';
import scheduleStore from "./../../../store/scheduleStore";
import LoadingSchedule from '../../pages/dashboard/Schedule/LoadingSchedule';

const MeetingContainer : React.FC = ()=>{
    const {fetchSchedules, schedules, isLoading} = scheduleStore()
    useEffect(()=>{
        fetchSchedules();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    console.log(schedules);
    return (
        <section className="meetings">
            {
               isLoading? <LoadingSchedule />:schedules.map((schedule,item)=>(<MeetingInADay key="item" schedule={schedule}/>))
            }
          </section>
    )
}

export default MeetingContainer