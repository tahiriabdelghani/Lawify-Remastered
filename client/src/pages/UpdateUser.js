import { useEffect, useState } from "react";
import FormRow from "../components/FormRow";
import Alert from "../components/Alert";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useAppContext } from "../context/appContext";
import UserNavbar from "../components/NavBar/UserNavBar";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();

  const navigate = useNavigate();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  // const [lastName, setLastName] = useState(user?.lastName);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phoneNumber) {
      displayAlert();
      return;
    }
    updateUser({ name, email, phoneNumber });
  };

  const isLogged = !user ? false : true;
  useEffect(() => {
    if (!isLogged) {
      navigate("/moncompte");
    }
  });
  return (
    <>
      <UserNavbar />
      <Wrapper>
        <form className="form" onSubmit={handleSubmit}>
          <h3>profile</h3>
          {showAlert && <Alert />}
          <div className="form-center">
            <FormRow
              type="text"
              name="name"
              value={name}
              handleChange={(e) => setName(e.target.value)}
            />
            {/* Phone Number */}
            <FormRow
              placeholder="06 ** ** ** **"
              type="Number"
              name="phoneNumber"
              value={phoneNumber}
              handleChange={(e) => setPhoneNumber(e.target.value)}
            />
            <FormRow
              type="email"
              name="email"
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="btn btn-block"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Please Wait..." : "save changes"}
            </button>
          </div>
        </form>
      </Wrapper>
    </>
  );
};

export default Profile;
