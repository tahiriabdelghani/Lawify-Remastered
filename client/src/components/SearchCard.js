import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import main from "../assets/images/Judge.svg";
import axios from "axios";
import Wrapper from "../assets/wrappers/LandingPage";
import Wrapper1 from "../assets/wrappers/RegisterPage";
import FormRowSelect from "../components/FormRowSelect";
import { useAppContext } from "../context/appContext";

const initialState = {
  speciality: "",
  city: "",
};

function SearchCard() {
  const [cities, setCities] = useState();
  const [specialities, setSpecialities] = useState();
  const [values, setValues] = useState(initialState);




  // global context and useNavigate later
  const { specialityOptions, villeOptions, city, speciality } = useAppContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const addToLocalStorage = () => {
    localStorage.setItem("city", values.city);
    localStorage.setItem("speciality", values.speciality);
  };

  return (
    <Wrapper>
      <main>
        <div className="container page">
          <div className="info">
            <Wrapper1 className="full-page">
              <form className="form" onSubmit={onSubmit}>
                <h3>Chercher un Avocat</h3>

                {/* Spécialité field */}
                <div className="form-row" style={{ marginTop: "20px" }}>
                  {/* Spécialité */}
                  <FormRowSelect
                    labelText="Spécialité"
                    name="speciality"
                    value={values.speciality}
                    handleChange={handleChange}
                    list={[speciality, ...specialityOptions]}
                  />

                  {/* <DropDown1 /> */}
                  <FormRowSelect
                    labelText="Ville"
                    name="city"
                    value={values.city}
                    handleChange={handleChange}
                    list={[city, ...villeOptions]}
                  />
                </div>
                <Link to="/searchresult">
                  <button
                    onClick={addToLocalStorage()}
                    type="submit"
                    className="btn btn-block"
                  >
                    Chercher
                  </button>
                </Link>
              </form>
            </Wrapper1>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
}

export default SearchCard;
