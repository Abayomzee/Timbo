// import MeetingStore from "./../../store/meetingStore";

// import callService from "../../services/callService";

// // Amazon Chime
// import {
//   useMeetingManager,
//   DeviceLabels,
// } from "amazon-chime-sdk-component-library-react";

// interface JoinMeetingUserType {
//   uid: string;
//   firstname: string;
// }

// /**
//  * JoinMeeting Function - Add a user to a call
//  * @param {string} callId - Id of the call about to be joined, gotten from the URL Parameter
//  * @param {object} user - Data of current user
//  * @param {object} user.uid - Id of current user
//  * @param {object} user.firstname - Firstname of current user
//  */
// const joinMeeting = async (callId: string, user: JoinMeetingUserType) => {
//   const meetingManager = useMeetingManager();
//   const [setMeetingCode, setExternalUserId, setCallId, setChimeAttendeeId] =
//     MeetingStore((store) => [
//       store.setMeetingCode,
//       store.setExternalUserId,
//       store.setCallId,
//       store.setChimeAttendeeId,
//     ]);

//   // Fetch the meeting and attendee data from your server application
//   const meetingResponse: any = await callService.joinConferenceCall(callId, {
//     userId: user.uid,
//     name: user.firstname,
//   });

//   const meetingJson: any = await meetingResponse.data;
//   console.log("Meeting Data: ", meetingJson.data);
//   setMeetingCode(meetingJson.external_id);
//   setCallId(meetingJson.conversation.call_id);
//   setExternalUserId(meetingJson.participant.ExternalUserId);
//   setChimeAttendeeId(meetingJson.participant.AttendeeId);
//   // AttendeeId

//   const joinData = {
//     meetingInfo: meetingJson.Meeting,
//     attendeeInfo: meetingJson.participant,
//     deviceLabels: DeviceLabels.AudioAndVideo,
//   };

//   //set the current call to state
//   // setCurrentCall(meetingJson);

//   // Use the join API to create a meeting session using the above data
//   await meetingManager.join(joinData);
// };

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {};
