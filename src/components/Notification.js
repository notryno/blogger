import React, { Component } from "react";
import * as signalR from "@microsoft/signalr";

let connection = new signalR.HubConnectionBuilder()
  .withUrl("http://localhost:5000/hubs/notification")
  .build();

connection.start();

connection.on("ReceiveMessage", (message) => {
  console.log(message);
});
