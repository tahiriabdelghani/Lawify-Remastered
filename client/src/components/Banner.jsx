import React, { Component, useEffect, useState } from "react";
import Navbar from "../components/Navbar1";
import ListImage from "../assets/images/img_525475.png";
import { MdVerified, MdWork } from "react-icons/md";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import avocatDefaultImg from "../assets/images/avocat-default-img.png";
import userDefaultImg from "../assets/images/user-default-img.png";
import { useAppContext } from "../context/appContext";
import EditInfosForm from "../components/EditInfosForm2";
import Calendar from "./Calendar"

function Banner(props) {
  const [infosModalState, setInfosModalState] = useState(false);
  const [calendarState, setCalendarState] = useState(false);
  const openInfosModal = () => {
    setInfosModalState(!infosModalState);
  };
  const openCalendar = () => {
    setCalendarState(!calendarState);
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        console.log("test");
        const res = await axios("/api/users?userId=" + props.user);
        setUserData(res.data);
        console.log(res.data);
        console.log(` user : ${userData}`);
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
  }, [props.user]);
  const link = `/messenger/${user._id}/${props.user}`;
  return (
    <div class="container1">
      <div class="cover-photo">
        <img
          src={
            userData?.image || userData?.role === "avocat"
              ? avocatDefaultImg
              : userDefaultImg
          }
          class="profile"
        />
        {userData?.role === "avocat" ? (
          <>
            <div class="verified">
              <MdVerified />
              <p style={{ display: "inline" }}>
                &nbsp;Cet avocat nous a fait parvenir sa carte professionnelle
              </p>
            </div>
            <div class="experience">
              <MdWork />
              <p style={{ display: "inline" }}>&nbsp;20 annees d'experience</p>
            </div>
          </>
        ) : null}
      </div>

      <div class="profile-name">{userData?.name}</div>

      <div class="box">
        <div class="about">
          <p class="adresse">
            {userData?.adresse !== "" || userData?.role==="avocat" ? <ImLocation2 /> : null}{" "}
            {userData?.adresse}
          </p>
          <p class="email">
            <MdEmail />
            &nbsp;
            {userData?.email}
          </p>
          {userData?.role === "avocat" ? (
            <>
              <ul class="domaines">
                {userData?.domaines?.map((i, domaine) => (
                  <li key={i}>{userData?.domaines[domaine]}</li>
                ))}
              </ul>
              <ul class="services">
                <li>
                  <img style={{ width: "15px" }} src={ListImage} /> Rendez-vous
                  online
                </li>
                <li>
                  <img style={{ width: "15px" }} src={ListImage} /> Rendez-vous
                  au cabinet
                </li>
              </ul>
            </>
          ) : null}
        </div>
        <div class="actions">
          {user._id === props.user ? (
            <>
            
            <button onClick={openInfosModal} className="btn btn-block button">
              Modifier Mes Informations
            </button>
            <Link to="/calender">
            <button type="submit" className="btn btn-block button">
              Mon Calendrier
            </button>
          </Link>
            </>
          ) : null}

          {props.user !== user._id ? (
            <>

              <a >
                <button onClick={openCalendar} className="btn btn-block button">
                  Voir calendier
                </button>
              </a>
              <a href={link}>
                <button type="submit" className="btn btn-block button">
                  Envoyer un message
                </button>
              </a>
            </>
          ) : null}
        </div>
      </div>
      {userData?.role === "avocat" ? <Navbar /> : null}
      <EditInfosForm
        key={userData}
        modalState={infosModalState}
        openModal={openInfosModal}
        userData={userData}
        // onModalSubmit={onModalSubmit}
      />
      <Calendar
            id="calendar"
            selectedAvocat={props.user}
            calendarState={calendarState}
            openCalendar={openCalendar}
            // onModalSubmit={onInfosModalSubmit}
          />
    </div>
  );
}

export default Banner;
