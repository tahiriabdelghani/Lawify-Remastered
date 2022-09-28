import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { useAppContext } from "../../context/appContext";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const nouserStyle = {width: "fit-content", marginLeft:"800px"};

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  const logoutUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link style={{ width: "fit-content", float: "left" }} to="/">
            <Logo />
          </Link>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div
          style={{ margin: "auto" }}
          className="links-container"
          ref={linksContainerRef}
        >
          <ul className="links" ref={linksRef}>
            {user? (
              <li>
                <a style={{ width: "fit-content"}} href="/messenger">
                  Messenger
                </a>
              </li>
            ) : (
              <></>
            )}
            {user && user.role === "avocat" ? (
              <li>
                <a style={{ width: "fit-content" }} href="/calender">
                  Mon Calendrier
                </a>
              </li>
            ) : (
              <></>
            )}

            {user? (
              <li>
                <a style={{ width: "fit-content" }} href="/appointements">
                  Mes Rendez-vous
                </a>
              </li>
            ) : (
              <></>
            )}

            <li>
              { !user?
                (<a
                style={{ width: "fit-content", marginLeft:"800px" }}
                href={user ? `/profile` : `/moncompte`}
              >
                {user ? `Mon Profil` : `Se Connecter`}
              </a>):(<a
                style={{ width: "fit-content"}}
                href={user ? `/profile` : `/moncompte`}
              >
                {user ? `Mon Profil` : `Se Connecter`}
              </a>)
              }
  
              
            </li>
            {user ? (
              <li>
                <a className="logouticon" href="/" onClick={logoutUser}>
                  <FiLogOut title="LogOut" style={{ fontSize: "1.5em" }} />
                </a>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
