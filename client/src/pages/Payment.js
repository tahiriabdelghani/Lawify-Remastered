import { useState, useEffect } from "react";
import FormRow from "../components/FormRow";
import Wrapper from "../assets/wrappers/RegisterPage";

import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../components/NavBar/Navbar";
import Footer from "../components/compenent-footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

// global context and useNavigate later

const initialState = {
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
  isMember: true,
};
// if possible prefer local state
// global state

function Payment() {
  const [values, setValues] = useState(initialState);

  // global context and useNavigate later
  const { isLoading, showAlert, displayAlert, loginUser, user } =
    useAppContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { nom, prenom, email, telephone } = values;
    if (!email || !telephone || !nom || !prenom) {
      displayAlert();
      return;
    }
  };

  return (
    <>
      <UserNavbar />

      <Wrapper className="full-page">
        <form className="form" onSubmit={onSubmit}>
          <h3>Details de paiement</h3>

          <div className="form-row">
            <FormRow
              type="text"
              name="nom"
              labelText="nom du porteur de carte"
              value={values.nom}
              handleChange={handleChange}
            />
            <FormRow
              type="text"
              name="prenom"
              labelText="numero de carte de paiement"
              value={values.numero}
              handleChange={handleChange}
            />
            <FormRow
              type="email"
              name="email"
              labelText="email"
              value={values.email}
              handleChange={handleChange}
            />
            <FormRow
              type="text"
              name="téléphone"
              labelText="téléphone"
              value={values.telephone}
              handleChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-block">
            Passer au paiement
          </button>
        </form>
      </Wrapper>
    </>
  );
}

export default Payment;
