import React from "react";
import Footer from "../components/compenent-footer/Footer";
import AvocatNavBar from "../components/NavBar/AvocatNavBar";
import UserNavbar from "../components/NavBar/UserNavBar";
import FetchTime from "./FetchTime";

export default function AvocatHome() {
  return (
    <div>
      <AvocatNavBar />
      {/* <FetchTime /> */}
      <h2>Welcome To Avocat home</h2>
    </div>
  );
}
