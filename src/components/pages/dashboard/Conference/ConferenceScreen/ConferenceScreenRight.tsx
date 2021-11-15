import React from "react";

//custom import
import Typography from "../../../../common/Typography/Typography";
import Button from "./../../../../common/Button/Button";
import ChatBox from "../../Messages/Bones/ChatBox";
import TypingChat from "./../../../../common/Chat/TypingChat";
import MessageInput from "./../../../../common/Chat/ChatInput";
import callsStore from "../../../../../store/callStore";
import authService from "../../../../../services/authService";
import useSocketio from "../../../../../utils/hooks/useSocketio";
import api from "../../../../../utils/constants/api";
import { usePost } from '../../../../../utils/hooks/fetchHook';

interface Props {
  showRight: boolean
}


const ConferenceScreenRight: React.FC<Props> = ({ showRight }) => {

  //get the current call details
  const currentCall = callsStore(store => store.currentCall);

  //get the conversation id
  const { conversation_id: conversationId = ""} = currentCall;


  //start the socket io
  const {  allMessages, user, guestTyping } = useSocketio(conversationId);

  //post message
  const { post: postMessage } = usePost("");
  
  

  //this is triggered when the user send message
  const sendMesssge = async (attachments: any, message:any) => {
    console.log(message);
    try {
      const formData = new FormData();
      formData.append("text", message);
      if (attachments) {
        attachments.forEach((attachment: any) => {
          formData.append("attachments", attachment);
        });
      }
      await postMessage(
        formData,
        {},
        api.POST_CONVERSATION_MESSAGE(conversationId)
      );
    } catch (err) {}
  };
  const assetToken = authService.getAssetToken();
  return (
    <>
    {
      showRight && 
    <aside className="call-conference-video__right">
      <div className="call-conference-video__right-top">
        <Typography type="h3" cssClass="head-10" text="Messages" />

        <Button
          cssClass="btn btn-icon m-l-auto"
          icon="icon-user"
          iconClass="icon-user"
          // handleClick={handleClick}
        />
        <Button
          cssClass="btn btn-icon m-l-10px"
          icon="icon-send"
          iconClass="icon-send"
          // handleClick={handleClick}
        />
      </div>
      <div className="call-conference-video__right-body">
    
          <ChatBox
                      allMessages={allMessages.current}
                      conversationId={conversationId}
                      user={user}
                      assetToken={assetToken}
                     
                    />
                
                  {guestTyping.typing ? (
                    <TypingChat user={guestTyping} />
                  ) : null}
      </div>
      <div className="call-conference-video__right-footer">
        <MessageInput
          // getMessage={getMessage}
          handleSubmit={sendMesssge}
        />
      </div>
    </aside>
    }
    </>
  );
};

export default ConferenceScreenRight;
