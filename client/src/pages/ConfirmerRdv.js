import { useState, useEffect } from "react";
import FormRow from "../components/FormRow";
import Wrapper from "../assets/wrappers/RegisterPage";

import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../components/NavBar/UserNavBar";
import Footer from "../components/compenent-footer/Footer";

// global context and useNavigate later

const initialState = {
  code: "",

  isMember: true,
};
// if possible prefer local state
// global state

function ConfirmerRdv() {
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
    // const { email, password } = values;
    //if (!email || !password) {
    // displayAlert();
    // return;
  };
  // const currentUser = { email, password };
  // loginUser(currentUser);
  //console.log(values);
  // };

  //useEffect(() => {
  //  if (user) {
  // setTimeout(() => {
  // navigate("/userhome");
  // }, 3000);
  // }
  //}, [user, navigate]);
  return (
    <>
      <UserNavbar />
      <Wrapper className="full-page">
        <form className="form" onSubmit={onSubmit}>
          <h3> Confirmer votre rendez-vous</h3>
          <p>Saisissez le code communiqué par SMS /email</p>

          {/* name field */}
          <div className="form-row">
            <FormRow
              type="text"
              name="code"
              placeholder="saisissez le code"
              value={values.code}
              handleChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-block">
            Confirmer
          </button>
          <a href="/book-appointment">Vous n'avez pas reçu votre code ?</a>
        </form>
      </Wrapper>
    </>
  );
}

export default ConfirmerRdv;
