import React from "react";
import Footer from "../components/compenent-footer/Footer";
import NavBar from "../components/NavBar/Navbar";
import SearchCard from "../components/SearchCard";
import Profiles from "./ProfilesForSearch/Profiles";
export default function SearchResult() {
  return (
    <div>
      <NavBar />
      <Profiles />
    </div>
  );
}
