import { useState, useEffect } from "react";
import FormRow from "../components/FormRow";
import Wrapper from "../assets/wrappers/RegisterPage";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/compenent-footer/Footer";
import { useNavigate } from "react-router-dom";

// global context and useNavigate later
import { useAppContext } from "../context/appContext";
import Alert from "../components/Alert";

const initialState = {
  name: "",
  email: "",
  password: "",
  phoneNumber: "",
  isMember: true,
};
// if possible prefer local state
// global state

function UserRegister() {
  const [values, setValues] = useState(initialState);

  // global context and useNavigate later
  const { isLoading, user, showAlert, displayAlert, isMember, setupUser } =
    useAppContext();
  const navigate = useNavigate();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, phoneNumber } = values;
    if (!email || !password || !name || !phoneNumber) {
      displayAlert();
      return;
    }
    // const currentUser = { name, email, password };
    // registerUser(currentUser);

    // console.log(values);
    const currentUser = { name, email, password };
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Login Successful! Redirecting...",
      });
    } else {
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "User Created! Redirecting...",
      });
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/userhome");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <div>
      <Navbar />
      <Wrapper className="full-page">
        <form className="form" onSubmit={onSubmit}>
          <h3>UserRegister</h3>
          {showAlert && <Alert />}
          <div className="form-row">
            {/* name field */}
            <FormRow
              placeholder="Your name"
              type="text"
              labelText="name"
              name="name"
              value={values.name}
              handleChange={handleChange}
            />

            {/* email input */}
            <FormRow
              placeholder="example@gmail.com"
              type="email"
              name="email"
              labelText="email"
              value={values.email}
              handleChange={handleChange}
            />
            {/* Phone Number */}
            <FormRow
              placeholder="06 ** ** ** **"
              type="Number"
              name="phoneNumber"
              labelText="number"
              value={values.phoneNumber}
              handleChange={handleChange}
            />
            {/* password input */}
            <FormRow
              placeholder="Your password"
              type="password"
              name="password"
              labelText="password"
              value={values.password}
              handleChange={handleChange}
            />
          </div>
          <button
            on
            type="submit"
            className="btn btn-block"
            disabled={isLoading}
            onClick={toggleMember}
          >
            Valider
          </button>
        </form>
      </Wrapper>
    </div>
  );
}

export default UserRegister;
