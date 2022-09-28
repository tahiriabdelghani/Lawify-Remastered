import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";
import Navbar from "../components/NavBar/Navbar";

function Error() {
  return (
    <>
      <Navbar />
      <Wrapper className="full-page">
        <div>
          <img src={img} alt="not found" />

          <Link to="/">back home</Link>
        </div>
      </Wrapper>
    </>
  );
}

export default Error;
