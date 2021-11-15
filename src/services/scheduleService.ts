import http from "./httpService";
import api from "../utils/constants/api";

// const allCallsApi = "/call";
// const startConferenceCallApi = "/call/new";
// const joinConferenceCallApi = "/call";
// const getMeetingParticipantApi = "/ call";

const allScheduleApi = "/schedule/calls";
const createScheduleApi = "/schedule/create";
const deleteScheduleApi = "/";

export const getAllSchedule = () => {
  return http.get(allScheduleApi);
};
export const createNewSchdule = (data: any) => {
  return http.post(createScheduleApi, data);
};
export const deleteSchedule = (id: any) => {
  return http.delete(deleteScheduleApi);
};
export const getSchedules = () => {
  return http.get(api.GET_SCHEDULES);
};

// export const getAllUserCalls = () => {
//   return http.get(allCallsApi);
// };

// export const startConferenceCall = (data: any) => {
//   return http.post(startConferenceCallApi, data);
// };

// export const joinConferenceCall = (call_id: any, data: any) => {
//   return http.post(`${joinConferenceCallApi}/${call_id}/join`, data);
// };

// export const getMeetingParticipant = (call_id: any, participantId: any) => {
//   return http.get(
//     `${getMeetingParticipantApi}/${call_id}/participants/${participantId}`
//   );
// };

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
// export default {
//   getAllUserCalls,
//   startConferenceCall,
//   joinConferenceCall,
//   getMeetingParticipant,
// };

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getAllSchedule,
  createNewSchdule,
  deleteSchedule,
  getSchedules,
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
// export default {};
