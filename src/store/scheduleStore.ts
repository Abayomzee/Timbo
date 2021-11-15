import create from "zustand";
import scheduleService from "./../services/scheduleService"; 

const testarray = [
  {
    caller_id: "45559fa4-1b2e-4946-bf6d-85fc9ea30d6f",
    created_at: "2021-08-25T14:27:50.257Z",
    duration: 0,
    id: 1,
    note: "string",
    participants: [],
    started_at: "2021-08-30T15:00:00.000Z",
    title: "string",
    token: "LAIVg5yZcFGejDFzm7Ci",
    uid: "baa21640-9764-48a4-848c-c7c3f4415ba3",
    updated_at: "2021-08-25T14:27:50.257Z"
  },
  {
    caller_id: "45559fa4-1b2e-4946-bf6d-85fc9ea30d6f",
    created_at: "2021-08-25T14:27:50.257Z",
    duration: 0,
    id: 1,
    note: "A note Adeola",
    participants: [],
    started_at: "2021-08-30T15:00:00.000Z",
    title: "stringtring tringtringtringtring tringtring",
    token: "LAIVg5yZcFGejDFzm7Ci",
    uid: "baa21640-9764-48a4-848c-c7c3f4415ba3",
    updated_at: "2021-08-25T14:27:50.257Z"
  },
  {
    caller_id: "45559fa4-1b2e-4946-bf6d-85fc9ea30d6f",
    created_at: "2021-08-25T14:27:50.257Z",
    duration: 0,
    id: 1,
    note: "string",
    participants: [],
    started_at: "2021-08-30T15:00:00.000Z",
    title: "string",
    token: "LAIVg5yZcFGejDFzm7Ci",
    uid: "baa21640-9764-48a4-848c-c7c3f4415ba3",
    updated_at: "2021-08-25T14:27:50.257Z"
  },
  {
    caller_id: "45559fa4-1b2e-4946-bf6d-85fc9ea30d6f",
    created_at: "2021-08-25T14:27:50.257Z",
    duration: 0,
    id: 1,
    note: "A note Adeola",
    participants: [],
    started_at: "2021-08-30T15:00:00.000Z",
    title: "stringtring tringtringtringtring tringtring",
    token: "LAIVg5yZcFGejDFzm7Ci",
    uid: "baa21640-9764-48a4-848c-c7c3f4415ba3",
    updated_at: "2021-08-25T14:27:50.257Z"
  },
  {
    caller_id: "45559fa4-1b2e-4946-bf6d-85fc9ea30d6f",
    created_at: "2021-08-25T14:27:50.257Z",
    duration: 0,
    id: 1,
    note: "string",
    participants: [],
    started_at: "2021-08-26T12:19:33.087Z",
    title: "string",
    token: "LAIVg5yZcFGejDFzm7Ci",
    uid: "baa21640-9764-48a4-848c-c7c3f4415ba3",
    updated_at: "2021-08-25T14:27:50.257Z"
  },
  {
    caller_id: "45559fa4-1b2e-4946-bf6d-85fc9ea30d6f",
    created_at: "2021-08-25T14:27:50.257Z",
    duration: 0,
    id: 1,
    note: "A note Adeola",
    participants: [],
    started_at: "2021-08-26T12:19:33.087Z",
    title: "stringtring tringtringtringtring tringtring",
    token: "LAIVg5yZcFGejDFzm7Ci",
    uid: "baa21640-9764-48a4-848c-c7c3f4415ba3",
    updated_at: "2021-08-25T14:27:50.257Z"
  }
]


const isSameDay = (a:any, b:any) => {
  const c = new Date(a);
  const d = new Date(b);
  return c.getFullYear() === d.getFullYear() &&
    c.getMonth() === d.getMonth() &&
    c.getDate()=== d.getDate()
}
const doLoop = (data:any)=>{
  const remainData:[]|any = [];

    const partone = data.filter((item:{}|any,index:number)=>{
      //if date is equal
      if(isSameDay(data[0].started_at, item.started_at)){
        return true;
      }else{
        remainData.push(item)
        return false
      }
    })
    return {remainData, partone}
}
const formatData =(data:any)=> {
    // [[{},{}],[{},{}]]
    const generalObject = []
    let prevData = data
    while (prevData.length > 1){
      const {remainData, partone} = doLoop(prevData)
      prevData = remainData;
      generalObject.push(partone)
    }
    // console.log("😁😁😁😁",generalObject)
    return generalObject
}



interface CallsStoreType {
  schedules: Array<object>;
  fetchSchedules: () => void;
  fetchStaticData:()=>void;
  isLoading: boolean;
}

const initialState = {
schedules: []
}
const callsStore = create<CallsStoreType>((set) => ({
  ...initialState,
  isLoading: true,
  fetchSchedules: async () => {
    await scheduleService.getAllSchedule().then(({ data }) => {
      set((state) => ({ schedules: formatData(data), isLoading: false }));
    }).catch(err=>console.log(err.response));
  },
  createSchedule: async ()=>{

  },
  fetchStaticData: ()=>{
    set((state)=>{
      return{schedules:formatData(testarray)}
    })
  }
}));

export default callsStore;
// import scheduleService from "../services/scheduleService";
// // import callService from "./../services/callService";

// interface ScheduleStoreType {
//   schedules: [] | any;
//   fetchSchedules: () => void;
// }

// const ScheduleStore = create<ScheduleStoreType>((set) => ({
//   schedules: [],
//   fetchSchedules: async () => {
//     const res = await scheduleService.getSchedules();
//     // set((store) => ({ meetingCode: code, callId: code }));
//   },
// }));

// export default ScheduleStore;
