import React from "react";
import { Link } from "react-router-dom";
import RequestDetails from "./RequestDetails";

const Follower = ({ link, image, html_url, name }) => {
  return (
    <article className="request-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <Link to={link} className="btn">
        view profile
      </Link>
    </article>
  );
};

export default Follower;
