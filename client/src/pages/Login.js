import { useState, useEffect } from "react";
import FormRow from "../components/FormRow";
import Wrapper from "../assets/wrappers/RegisterPage";
import SignUpSwitch from "../components/SignUpSwitch";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import axios from "axios";
// global context and useNavigate later

const initialState = {
  email: "",
  password: "",
  isMember: true,
};
// if possible prefer local state
// global state

function Login() {
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
    const { email, password } = values;
    if (!email || !password) {
      displayAlert();
      return;
    }
    const currentUser = { email, password };
    loginUser(currentUser);
  };

  useEffect(() => {
    // console.log(user.name);
    if (user) {
      // setTimeout(() => {
      navigate("/");
      // }, 3000);
    }
  }, [user, navigate]);
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <h3>Login</h3>
        {showAlert && <Alert />}
        {/* name field */}
        <div className="form-row">
          {/* email input */}
          <FormRow
            type="email"
            name="email"
            labelText="email"
            value={values.email}
            handleChange={handleChange}
          />
          {/* password input */}
          <FormRow
            type="password"
            name="password"
            labelText="password"
            value={values.password}
            handleChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <SignUpSwitch />
      </form>
    </Wrapper>
  );
}

export default Login;
