import io from "socket.io-client";

let socket: any;

export const initiateSocketConnection = () => {
  socket = io("https://timbo-api.herokuapp.com/conversation");
  console.log(`Connecting socket...`);
};
