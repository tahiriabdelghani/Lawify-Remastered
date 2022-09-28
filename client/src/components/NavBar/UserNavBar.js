import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { userHomeLinks, social } from "./data";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { FiLogOut } from "react-icons/fi";
import { useAppContext } from "../../context/appContext";

const UserNavbar = () => {
  // const { logoutUser } = useAppContext;
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
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
          <Link to="/">
            <Logo />
          </Link>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {userHomeLinks.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
            <li>
              <a href="/" onClick={logoutUser}>
                <FiLogOut title="LogOut" style={{ fontSize: "1.5em" }} />
              </a>
            </li>
          </ul>
        </div>
        {/* <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul> */}
      </div>
    </nav>
  );
};

export default UserNavbar;
