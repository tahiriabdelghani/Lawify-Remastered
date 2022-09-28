import React, { Component, useEffect, useState } from "react";
import ListImage from "../assets/images/img_525475.png";
import FakeMap from "../assets/images/Capture.PNG";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { BiWorld } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import EditPresentationForm from "../components/EditPresentationForm";
import EditCompetencesForm from "../components/EditCompetencesForm";
import EditCoordonneesForm from "../components/EditCoordonneesForm";
import EditInfosForm from "../components/EditInfosForm";
import { useAppContext } from "../context/appContext";

function About(props) {
  const [presentationModalState, setPresentationModalState] = useState(false);
  const [competencesModalState, setCompetencesModalState] = useState(false);
  const [coordonneesModalState, setCoordonneesModalState] = useState(false);
  const [infosModalState, setInfosModalState] = useState(false);
  const openPresentationModal = () => {
    setPresentationModalState(!presentationModalState);
  };
  const openCompetencesModal = () => {
    setCompetencesModalState(!competencesModalState);
  };
  const openCoordonneesModal = () => {
    setCoordonneesModalState(!coordonneesModalState);
  };
  const openInfosModal = () => {
    setInfosModalState(!infosModalState);
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        console.log("test");
        const res = await axios("/api/users?userId=" + props.user);
        setUserData(res.data);
        console.log(res.data);
        console.log(` user : ${userData}`);
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
  }, [props.user]);

  return (
    <>
      <div>
        {userData?.presentation ? (
          <div id="presentation" class="container1">
            <br />
            <div class="section-header">
              <div class="section-title">Présentation</div>
              <button
                onClick={openPresentationModal}
                type="submit"
                className="btn btn-block button editButton"
              >
                Modifier
              </button>
            </div>
            <p class="desc">{userData?.presentation}</p>
            <br />
          </div>
        ) : props.user === user._id ? (
          <div id="presentation">
            <div style={{ height: "100px" }} class="container1 section-header">
              <button
                onClick={openPresentationModal}
                type="submit"
                className="btn btn-block button editButton"
                style={{
                  float: "none",
                  marginTop: "20px",
                  width: "fit-content",
                }}
              >
                Ajouter une presentation
              </button>
            </div>
          </div>
        ) : null}

        <br />
        <br />

        {userData?.competences.length !== 0 ? (
          <div id="competences" class="container1">
            <br />
            <div class="section-header">
              <div class="section-title">Compétances</div>
              <button
                onClick={openCompetencesModal}
                type="submit"
                className="btn btn-block button editButton"
              >
                Modifier
              </button>
            </div>
            <div class="competances">
              {userData?.competences.map((i, competence) => (
                <div key={i} class="competance">
                  <img style={{ width: "15px" }} src={ListImage} />{" "}
                  {userData?.competences[competence]}
                </div>
              ))}
            </div>
          </div>
        ) : props.user === user._id ? (
          <div id="competences">
            <div style={{ height: "100px" }} class="container1 section-header">
              <button
                onClick={openCompetencesModal}
                type="submit"
                className="btn btn-block button editButton"
                style={{
                  float: "none",
                  marginTop: "20px",
                  width: "fit-content",
                }}
              >
                Ajouter vos competences
              </button>
            </div>
          </div>
        ) : null}

        <br />
        <br />

        {userData?.adresse == null &&
        userData?.tele == null &&
        userData?.website == null ? (
          props.user === user._id ? (
            <div id="coordonnees" class="container1">
              <div style={{ height: "100px" }} class="section-header">
                <button
                  onClick={openCoordonneesModal}
                  type="submit"
                  className="btn btn-block button editButton"
                  style={{
                    float: "none",
                    marginTop: "20px",
                    width: "fit-content",
                  }}
                >
                  Ajouter vos coordonnees
                </button>
              </div>
              <div class="coordonnees">
                <div class="map">
                  <img style={{ width: "200px" }} src={FakeMap}></img>
                </div>
              </div>
            </div>
          ) : null
        ) : (
          <div id="coordonnees" class="container1">
            <br />
            <div class="section-header">
              <div class="section-title">Coordonnées</div>
              <button
                onClick={openCoordonneesModal}
                type="submit"
                className="btn btn-block button editButton"
              >
                Modifier
              </button>
            </div>
            <div class="coordonnees">
              <div class="map">
                <img style={{ width: "200px" }} src={FakeMap}></img>
              </div>
              <div class="coordonnee">
                <p>
                  {userData?.adresse !== "" ? <ImLocation2 /> : null}{" "}
                  {userData?.adresse}
                </p>
                <p>
                  {userData?.website !== "" ? <BiWorld /> : null}
                  <a href={userData?.website}> {userData?.website}</a>
                </p>
                <p>
                  {userData?.tele !== "" ? <BsTelephoneFill /> : null}{" "}
                  {userData?.tele}
                </p>
                <p>
                  {userData?.email !== "" ? <MdEmail /> : null}
                  {userData?.email}
                </p>
              </div>
            </div>
          </div>
        )}

        <br />
        <br />
        {userData?.langues.length === 0 &&
        userData?.formations.length == 0 &&
        userData?.tarifs == null ? (
          props.user === user._id ? (
            <div id="infos">
              <div
                style={{ height: "100px" }}
                class="container1 section-header"
              >
                <button
                  onClick={openInfosModal}
                  type="submit"
                  className="btn btn-block button editButton"
                  style={{
                    float: "none",
                    marginTop: "20px",
                    width: "fit-content",
                  }}
                >
                  Ajouter vos Informations
                </button>
              </div>
            </div>
          ) : null
        ) : (
          <div id="infos" class="container1">
            <br />
            <div class="section-header">
              <div class="section-title">Informations Supplimentaires</div>
              <button
                onClick={openInfosModal}
                className="btn btn-block button editButton"
              >
                Modifier
              </button>
            </div>
            <ul class="infos">
            <li>
                Langues :
                <span style={{ display: "block" }}>
                  <ul class="info">
                  {userData?.langues?.map((i, langue) => (
                  <li key={i}>{userData?.langues[langue]}</li>
                ))}
                  </ul>
                </span>
              </li>
              <li>
                Diplomes et formations :
                <span style={{ display: "block" }}>
                  <ul class="info">
                  {userData?.formations?.map((i, formation) => (
                  <li key={i}>{userData?.formations[formation]}</li>
                ))}
                  </ul>
                </span>
              </li>
              <li>
                Tarifs:{" " +userData?.price+" DH"}
              </li>
            </ul>
          </div>
        )}
      </div>
      <EditPresentationForm
        key={userData}
        user={userData}
        modalState={presentationModalState}
        openModal={openPresentationModal}
        // onModalSubmit={onPresentationModalSubmit}
      />
      <EditCompetencesForm
        key={userData}
        user={userData}
        modalState={competencesModalState}
        openModal={openCompetencesModal}
        // onModalSubmit={onCompetencesModalSubmit}
      />
      <EditCoordonneesForm
        user={userData}
        key={userData}
        modalState={coordonneesModalState}
        openModal={openCoordonneesModal}
        // onModalSubmit={onCoordonneesModalSubmit}
      />
      <EditInfosForm
        user={userData}
        key={userData}
        modalState={infosModalState}
        openModal={openInfosModal}
        // onModalSubmit={onInfosModalSubmit}
      />
    </>
  );
}

export default About;
