// import React, { useState, useEffect, useRef } from "react";
// import { HubConnectionBuilder } from "@microsoft/signalr";
// import ChatInput from "./ChatInput";
// import ChatWindow from "./ChatWindow";
// // import * as signalR from "@microsoft/signalr";

// const Chat = () => {
//   const [connection, setConnection] = useState(null);
//   const [chat, setChat] = useState([]);
//   const latestChat = useRef(null);

//   latestChat.current = chat;

//   // useEffect(() => {
//   //   const newConnection = new HubConnectionBuilder()
//   //     .withUrl("http://localhost:5079/hubs/notification", {
//   //       skipNegotiation: true,
//   //       transport: signalR.HttpTransportType.WebSockets,
//   //     })
//   //     .configureLogging(signalR.LogLevel.Information)
//   //     .withAutomaticReconnect()
//   //     .build();

//   //   setConnection(newConnection);
//   // }, []);

//   useEffect(() => {
//     if (connection) {
//       connection
//         .start()
//         .then((result) => {
//           console.log("Connected!");

//           connection.on("ReceiveMessage", (message) => {
//             const updatedChat = [...latestChat.current];
//             updatedChat.push(message);

//             setChat(updatedChat);
//           });
//         })
//         .catch((e) => console.log("Connection failed: ", e));
//     }
//   }, [connection]);

//   const sendMessage = async (user, message) => {
//     const chatMessage = {
//       user: user,
//       message: message,
//     };
//     console.log(connection.connectionStarted);

//     if (connection.connectionStarted) {
//       try {
//         await connection.send("SendMessage", chatMessage);
//       } catch (e) {
//         console.log(e);
//       }
//     } else {
//       alert("No connection to server yet.");
//     }
//   };

//   return (
//     <div>
//       <ChatInput sendMessage={sendMessage} />
//       <hr />
//       <ChatWindow chat={chat} />
//     </div>
//   );
// };

// export default Chat;
