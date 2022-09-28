import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <a className="navbar-button" href="#presentation">
          Présentation
        </a>
        <a className="navbar-button" href="#competences">
          Compétences
        </a>
        <a className="navbar-button" href="#coordonnees">
          Coordonnées
        </a>
        <a className="navbar-button" href="#infos">
          Informations Supplaimentaires
        </a>
      </nav>
    );
  }
}

export default Navbar;
