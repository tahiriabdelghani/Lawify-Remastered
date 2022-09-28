import { useState, useEffect } from "react";
import "../css/Chat.css";
import Footer from "../components/compenent-footer/Footer";
import UserNavbar from "../components/NavBar/UserNavBar";
// global context and useNavigate later

const initialState = {
  message: "",
};
// if possible prefer local state
// global state

function Login() {
  const [values, setValues] = useState(initialState);

  // global context and useNavigate later

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <>
      <UserNavbar />

      <div className="container">
        <div id="wrapper">
          <div id="menu">
            <p className="welcome">
              Welcome, <b></b>
            </p>
            <p className="logout">
              <a id="exit" href="/appointements">
                Quitter le chat
              </a>
            </p>
          </div>
          <div id="chatbox"></div>
          <form className="formulaire" name="message" onSubmit={onSubmit}>
            <input
              name="message"
              type="text"
              value={values.message}
              handleChange={handleChange}
              id="usermsg"
            />
            <input
              name="submitmsg"
              type="submit"
              id="submitmsg"
              value="envoyer"
            />
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
