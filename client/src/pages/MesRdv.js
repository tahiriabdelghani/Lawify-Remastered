import { useState, useEffect } from "react";
import FormRow from "../components/FormRow";
// import Wrapper from "../assets/wrappers/RegisterPage";

import { useAppContext } from "../context/appContext";
import { useNavigate, Link } from "react-router-dom";
import UserNavbar from "../components/NavBar/UserNavBar";
import Footer from "../components/compenent-footer/Footer";
import "../css/RDV.scss";
import FetchTime from "./FetchTime";
import axios from "axios";

function MesRdv() {
  const [appointements, setAppoitments] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const getAppoitments = async () => {
      try {
        const res = await axios("/api/v1/calender/appointements/" + user._id);
          setAppoitments(res.data);
        console.log(appointements)
      } catch (err) {
        console.log(err);
      }
    };
    getAppoitments();
  }, [user._id]);


  return (
    <>
      <UserNavbar />
      <div className="full-page">
        <nav className="RdvNav">
          <Link className="link" to="/appointements">
            Rendez-vous à venir
          </Link>
          <Link to="/passed-appointements">Rendez-vous passés </Link>

          <div className="animation start-home"></div>
        </nav>
        {appointements.length === 0? (
          <div className="no-appointments">
            Vous n'avez pas de rendez-vous à venir.
          </div>
        ) : (
          appointements.map((appointement) => (
            <div className="cards-container">
              <div className="card card-one">
                <header>

                </header>

                <h3 style={{}}>{appointement.avocatName}</h3>
                <p style={{fontSize:"15px", padding:"0px", marginTop:"-10px"}}>
                  Vous aurez rendez-vous le {appointement.date} <br />
                  {appointement.startTime}-{appointement.e}
                </p>
                <a href="/messenger">
                  <button style={{width:"80%", margin:"10px 30px"}} type="submit" className="btn btn-block">
                    Envoyer un message
                  </button>
                </a>
                <button style={{width:"80%", margin:"10px 30px"}} type="submit" className="btn btn-block">
                  Annuler le rendez-vous
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default MesRdv;
