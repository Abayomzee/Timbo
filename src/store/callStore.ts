import create from "zustand";
import callService from "./../services/callService";

interface CallsStoreType {
  calls: Array<object>;
  currentCall: any;
  isLoading: boolean;
  fetchCalls: () => void;
  setCurrentCall: (payload: any) => void;
  sendCallInvitatiion: (payload: any) => void;
}

const initialState = {
  calls: [],
  currentCall: {},
};

const callsStore = create<CallsStoreType>((set) => ({
  ...initialState,
  isLoading: true,
  fetchCalls: async () => {
    try {
      await callService.getAllUserCalls().then(({ data }) => {
        set((state) => ({ calls: [...data], isLoading: false }));
        //   console.log("From the Store: ", data);
      });
    } catch (error) {
      set((state) => ({ isLoading: false }));
    }
  },
  setCurrentCall: (payload: any) => {
    set((prevState) => ({
      ...prevState,
      currentCall: payload,
    }));
  },
  sendCallInvitatiion: async (data) => {
    try {
      const response = await callService.addMeetingParticipant(data);
      console.log("Added Participants", response.data);
    } catch (error) {
      console.log("Added Participants Failed");
    }
  },
}));

export default callsStore;
