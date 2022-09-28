import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

export default function Conversation({
  conversation,
  currentUser,
  currentChat,
}) {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    console.log(`currentuser : ${currentUser}`);
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    console.log(`friend : ${friendId}`);

    const getUser = async () => {
      try {
        const res = await axios("/api/users?userId=" + friendId);
        setUser(res.data);
        console.log(` user : ${user}`);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className={currentChat ? "currentChat conversation" : "conversation"}>
      <img src={user?.image} className="conversationImg" />
      <span className="conversationName">{user?.name}</span>
    </div>
  );
}
