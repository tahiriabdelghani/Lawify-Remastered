import "./messenger.css";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import "../../components";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { useAppContext } from "../../context/appContext";
import Navbar from "../../components/NavBar/Navbar";
import { useParams } from "react-router-dom";

function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();
  const user = JSON.parse(localStorage.getItem("user"));
  const scrollRef = useRef();
  const currentUser = useParams().currentUser;
  const currentFriend = useParams().currentFriend;

  // console.log([currentUser, currentFriend]);

  useEffect(async () => {
    try {
      const res = await axios.get(
        `/api/v1/conversations/find/${currentUser}/${currentFriend}`
      );
      if (res.data !== null) {
        setCurrentChat(res.data);
      } else {
        const newConvo = { senderId: currentUser, receiverId: currentFriend };
        const res = await axios.post(`/api/v1/conversations/`, newConvo);
        setConversations([...conversations, newConvo]);
        setCurrentChat(res.data);
      }
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }, [currentFriend]);

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/api/v1/conversations/" + user._id);
        setConversations(res.data);
        console.log(`user convos :${res.data}`);
        console.log(user.name);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/api/v1/messages/" + currentChat?._id);
        setMessages(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post("/api/v1/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <Navbar></Navbar>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation
                  key={c._id}
                  conversation={c}
                  currentUser={user}
                  currentChat={c._id === currentChat._id}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.length === 0 ? (
                    <h5 style={{ textAlign: "center", marginTop: "50px" }}>
                      Aucun message à afficher.
                    </h5>
                  ) : (
                    messages.map((m) => (
                      <div ref={scrollRef}>
                        <Message
                          key={m._id}
                          message={m}
                          own={m.sender === user._id}
                        />
                      </div>
                    ))
                  )}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat. {user?.name}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
