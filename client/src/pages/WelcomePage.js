import React from "react";
import SearchCard from "../components/SearchCard";
import TextHeader from "../components/TextHeader";
import Navbar from "../components/NavBar/Navbar";
import "scheduler-calendar/dist/index.css";
import Footer from "../components/compenent-footer/Footer";

export default function WelcomePage() {
  return (
    <div>
      <Navbar />
      <TextHeader />
      <SearchCard />
      <Footer />
    </div>
  );
}
