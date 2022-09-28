import React from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import Navbar from "../components/NavBar/Navbar";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/Main.css";
import { useAppContext } from "../context/appContext";

function Profil() {
  const user = JSON.parse(localStorage.getItem("user"));
  const visitedUser = useParams().visitedUser;

  return (
    <div>
      <Navbar />
      <br />
      <Banner user={visitedUser} />
      <br />
      <About user={visitedUser} />
      <br />
    </div>
  );
}

export default Profil;
