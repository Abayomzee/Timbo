import http from "./httpService";

const allCallsApi = "/call";
const startConferenceCallApi = "/call/new";
const joinConferenceCallApi = "/call";
const getMeetingParticipantApi = "/call";
const addMeetingParticipantApi = "/call/add-participants";
const recordCallApi = "/app/join-call-record";

export const getAllUserCalls = () => {
  return http.get(allCallsApi);
};

export const startConferenceCall = (data: any) => {
  return http.post(startConferenceCallApi, data);
};

export const joinConferenceCall = (call_id: any, data: any) => {
  return http.post(`${joinConferenceCallApi}/${call_id}/join`, data);
};

export const getMeetingParticipant = (call_id: any, participantId: any) => {
  return http.get(
    `${getMeetingParticipantApi}/${call_id}/participants/${participantId}`
  );
};

export const addMeetingParticipant = (data: any) => {
  return http.post(addMeetingParticipantApi, data);
};

export const recordCall = (callId: string) => {
  const url = `${callId}`;
  console.log(url)
  return http.post(recordCallApi, callId);
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getAllUserCalls,
  startConferenceCall,
  joinConferenceCall,
  getMeetingParticipant,
  addMeetingParticipant,
  recordCall,
};
