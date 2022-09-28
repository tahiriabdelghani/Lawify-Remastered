import { useState, useEffect } from "react";
import FormRow from "../components/FormRow";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../components/NavBar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

// global context and useNavigate later

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  tele: "",
  isMember: true,
};
// if possible prefer local state
// global state

function FormRdv() {
  const [values, setValues] = useState(initialState);
  const [userData, setUserData] = useState(null);
  const [selectedAvocat, setSelectedAvocat] = useState(
    useParams().selectedAvocat
  );
  const date = useParams().date;
  const startTime = useParams().startTime;
  const endTime = useParams().endTime;
  const appointmentId = useParams().appointmentId;
  const user = JSON.parse(localStorage.getItem("user"));

  // global context and useNavigate later
  const { isLoading, showAlert, displayAlert, loginUser } = useAppContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(
      "/api/calendar/" + appointmentId + "/" + user._id,
      values
    );
    window.location.href = "/appointments";
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios("/api/users?userId=" + selectedAvocat);
        setUserData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
  }, [selectedAvocat]);

  return (
    <>
      <UserNavbar />

      <Wrapper className="full-page">
        <form className="form" onSubmit={onSubmit}>
          <h3>Prendre votre rendez-vous</h3>
          <div className="rdv-infos">
            <div className="info">
              <span style={{ fontWeight: "bold" }}>Avocat</span> :{" "}
              {userData?.name}
            </div>
            <div className="info">
              <span style={{ fontWeight: "bold" }}>Date</span> : {date}
            </div>
            <div className="info">
              <span style={{ fontWeight: "bold" }}>De</span> : {startTime}
            </div>
            <div className="info">
              <span style={{ fontWeight: "bold" }}>À</span> : {endTime}
            </div>
          </div>

          {/* name field */}
          <div className="form-row">
            {/* email input */}
            <FormRow
              type="text"
              name="lastName"
              labelText="nom"
              value={values.lastName}
              handleChange={handleChange}
            />
            <FormRow
              type="text"
              name="firstName"
              labelText="prenom"
              value={values.firstName}
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
              name="tele"
              labelText="téléphone"
              value={values.tele}
              handleChange={handleChange}
            />
          </div>
          <button
            type="submit"
            onClick={() => (window.location.href = "/appointements")}
            className="btn btn-block"
          >
            Confirmer
          </button>
        </form>
      </Wrapper>
    </>
  );
}

export default FormRdv;
