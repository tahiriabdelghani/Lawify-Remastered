import { useState, useEffect } from "react";
import FormRow from "../components/FormRow";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/compenent-footer/Footer";
import { useNavigate } from "react-router-dom";
import FormRowSelect from "../components/FormRowSelect";
// global context and useNavigate later
import { useAppContext } from "../context/appContext";
import Alert from "../components/Alert";
import FileBase from "react-file-base64";

const initialState = {
  name: "",
  email: "",
  password: "",
  phoneNumber: "",
  speciality: "",
  price: "",
  city: "",
  image: "",
};
// if possible prefer local state
// global state

function LawyerRegister() {
  const [values, setValues] = useState(initialState);

  // global context and useNavigate later
  const {
    isLoading,
    showAlert,
    displayAlert,
    registerAvocat,
    specialityOptions,
    villeOptions,
    city,
    speciality,
  } = useAppContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      email,
      password,
      phoneNumber,
      speciality,
      city,
      price,
      image,
    } = values;
    if (
      !email ||
      !password ||
      !name ||
      !phoneNumber ||
      !city ||
      !speciality ||
      !image
    ) {
      displayAlert();
      return;
    }
    const currentUser = {
      name,
      email,
      password,
      speciality,
      city,
      price,
      phoneNumber,
      image,
    };
    registerAvocat(currentUser);
    console.log(values);
  };

  return (
    <div>
      {/* <pre>{JSON.stringify(item, null, "\t")}</pre> */}
      <Navbar />
      <Wrapper>
        <form className="form" onSubmit={onSubmit}>
          <h3
            style={{
              // textAlign: "center",
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            Inscription d'Avocat
          </h3>
          <p
            style={{
              padding: "20px 0",
              fontFamily: "inherit",
              // textAlign: "center",
            }}
          >
            Un membre de notre équipe vous contactera pour confirmer votre
            compte et compléter votre abonnement.
          </p>
          {showAlert && <Alert />}
          <div className="form-center">
            {/* Nom */}
            <FormRow
              type="text"
              name="name"
              labelText="name"
              value={values.name}
              handleChange={handleChange}
            />
            {/* Prénom */}

            {/* Email */}
            <FormRow
              labelText="Email"
              type="text"
              name="email"
              value={values.email}
              handleChange={handleChange}
            />
            {/* Mot de passe */}
            <FormRow
              type="password"
              labelText="Mot de passe "
              name="password"
              value={values.password}
              handleChange={handleChange}
            />
            {/* Télépone */}
            <FormRow
              type="number"
              labelText="Télé. Personnel "
              name="phoneNumber"
              value={values.phoneNumber}
              handleChange={handleChange}
            />
            {/* Price */}
            <FormRow
              type="number"
              labelText="Prix par minute "
              name="price"
              value={values.price}
              handleChange={handleChange}
            />
            {/* Spécialité */}
            <FormRowSelect
              labelText="Spécialité"
              name="speciality"
              value={values.speciality}
              handleChange={handleChange}
              list={[speciality, ...specialityOptions]}
            />

            {/* Ville */}
            <FormRowSelect
              labelText="Ville"
              name="city"
              value={values.city}
              handleChange={handleChange}
              list={[city, ...villeOptions]}
            />
            {/* Image  */}
            <div className="form-row">
              {" "}
              <label className="form-label">Photo de profil</label>
              <div className="form-input">
                <FileBase
                  type="file"
                  name="image"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setValues({ ...values, image: base64 })
                  }
                />
              </div>
            </div>

            <div className="btn-container">
              <button
                type="submit"
                className="btn btn-block submit-btn"
                disabled={isLoading}
              >
                submit
              </button>
              <button
                className="btn btn-block clear-btn"
                //   onClick={(e) => {
                //     e.preventDefault();
                //     clearValues();
                //   }}
              >
                clear
              </button>
            </div>
          </div>
        </form>
      </Wrapper>
    </div>
  );
}

export default LawyerRegister;
