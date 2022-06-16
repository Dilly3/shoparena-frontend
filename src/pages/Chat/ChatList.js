import React, { useContext } from "react";
import ChatArea from "./ChatArea";
import "./ChatList.css";

import {useAppContext} from "../../context/ContextUse"
import {useParams} from "react-router-dom";

const ChatList = ({ chats, apartmentID }) => {
  const { user } = useAppContext();
    const { id } = useParams();

  if (user === null) return <div>Loading...</div>;
    console.log("heya",id, chats)
  return (
    <div className="mt-3">
      <table className="table">
        <tbody id="chat-msgs">
          {chats.map((chat, indx) => {
              if (indx % 2 === 0) {
                 return <ChatArea key={indx} chat={chat} user={user}/>
              }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ChatList;
