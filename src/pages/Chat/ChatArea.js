import React from "react";

const ChatArea = ({ chat, user }) => {
  const color =
    chat.sender !== user.first_name + " " + user.last_name
      ? { backgroundColor: "#1a76d2", color: "white" }
      : { backgroundColor: "#EBF0F6", textAlign: "right" };
  return (
    <tr key={chat.id} style={color}>
      <td style={{ width: "50px" }}>
        <div className="sender">
          {chat.sender} @ <span className="date">{chat.created_at}</span>
        </div>
        <div className="message">{chat.message}</div>
      </td>
    </tr>
  );
};

export default ChatArea;
