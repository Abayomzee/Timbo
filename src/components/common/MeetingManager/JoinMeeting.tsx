import React, {  useEffect, useCallback } from "react";
// import React, { useState, useEffect, useCallback } from "react";
// import { useHistory, useParams, useLocation } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";

import MeetingStore from "./../../../store/meetingStore";
import { userStore } from "./../../../store/userStore";
import callsStore from "./../../../store/callStore";
import callService from "./../../../services/callService";

// Amazon Chime
import {
  useMeetingManager,
  DeviceLabels,
} from "amazon-chime-sdk-component-library-react";

// interface JoinMeetingUserType {
//   uid: string;
//   firstname: string;
// }

/**
 * JoinMeeting Function - Add a user to a call
 * @param {string} callId - Id of the call about to be joined, gotten from the URL Parameter
 * @param {object} user - Data of current user
 * @param {object} user.uid - Id of current user
 * @param {object} user.firstname - Firstname of current user
 */

interface PageParams {
  callId?: any;
}
interface Props {
  callId?: any;
}
const JoinMeeting: React.FC<Props> = () => {
  const { callId } = useParams<PageParams>();
  // const query = useQuery();

  const setCurrentCall = callsStore((store) => store.setCurrentCall);
  const { user, getUser } = userStore();
  const [setMeetingCode, setExternalUserId, setCallId, setChimeAttendeeId] =
    MeetingStore((store) => [
      store.setMeetingCode,
      store.setExternalUserId,
      store.setCallId,
      store.setChimeAttendeeId,
    ]);
  const meetingManager = useMeetingManager();
  const history = useHistory();

  const AddUserToMeeting = useCallback(async () => {
    await getUser();
    // const isRecord = query.get("record");

    // !isRecord ? await joinMeetingAsGuest() : await joinMeetingAsBot();
    await joinMeetingAsGuest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    AddUserToMeeting();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const joinMeetingAsGuest = async () => {
    // Fetch the meeting and attendee data from your server application
    const meetingResponse: any = await callService.joinConferenceCall(callId, {
      userId: user.uid,
      name: user.firstname,
    });

    const meetingJson: any = await meetingResponse.data;
    console.log("Meeting Data Guest: ", meetingJson);
    setMeetingCode(meetingJson.external_id);
    setCallId(meetingJson.conversation.call_id);
    setExternalUserId(meetingJson.participant.ExternalUserId);
    setChimeAttendeeId(meetingJson.participant.AttendeeId);
    // AttendeeId

    const joinData = {
      meetingInfo: meetingJson.Meeting,
      attendeeInfo: meetingJson.participant,
      deviceLabels: DeviceLabels.AudioAndVideo,
    };

    //set the current call to state
    setCurrentCall(meetingJson);

    // Use the join API to create a meeting session using the above data
    await meetingManager.join(joinData);

    // Start the session to join the meeting
    await meetingManager.start();
    history.push(`/user/call/start/${callId}`);
  };

  // const joinMeetingAsBot = async () => {
  //   // Fetch the meeting and attendee data from your server application
  //   const meetingResponse: any = await callService.recordCall(callId);

  //   const meetingJson: any = await meetingResponse.data;
  //   console.log("Meeting Data Bot: ", meetingJson);
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
  //   setCurrentCall(meetingJson);

  //   // Use the join API to create a meeting session using the above data
  //   await meetingManager.join(joinData);

  //   // Start the session to join the meeting
  //   await meetingManager.start();
  //   // history.push(`/user/call/start/${callId}`);
  // };

  return <></>;
};

export default JoinMeeting;

// A custom hook that builds on useLocation to parse
// the query string for you.
// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }
