import { useState, useEffect } from "react";
import FormRow from "../components/FormRow";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import { useNavigate, Link } from "react-router-dom";
import UserNavbar from "../components/NavBar/UserNavBar";
import Footer from "../components/compenent-footer/Footer";
import "../css/RDV.scss";

function MesRdvPass() {
  return (
    <>
      <UserNavbar />
      <Wrapper className="full-page">
        <nav className="RdvNav">
          <Link to="/appointements">Rendez-vous à venir</Link>
          <Link className="link" to="/passed-appointements">
            Rendez-vous passés{" "}
          </Link>

          <div class="animation start-home"></div>
        </nav>
        <div class="cards-container">
          <div class="card card-one">
            <header>
              <div class="avatar">
                <img src="https://randomuser.me/api/portraits/men/3.jpg" />
              </div>
            </header>
            <h3>Maître.prenom et nom</h3>
            <div class="desc">
              le Droit constitutionnel, le Droit administratif, les libertés
              publiques
            </div>
            <p>
              Vous eûtes rendez-vous le 1 février 2022 <br />
              14:30-14:45
            </p>
            <button type="submit" className="btn btn-block">
              Envoyer un message
            </button>
            <button type="submit" className="btn btn-block">
              Annuler le rendez-vous
            </button>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default MesRdvPass;
