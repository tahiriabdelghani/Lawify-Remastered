import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { useState } from "react";
import FormRow from "./FormRow";
import axios from "axios";
import {
  ModalCancel,
  ModalSubmit,
  ModalFooter,
  InputField,
  InputSpan,
  InputContainer,
  ModalBody,
  ModalHeader,
  customStyles,
} from "../assets/styledComponent/index";

const theData = localStorage.getItem("appointMentData");
const initialState = {
  email: "",
  password: "",
  isMember: true,
};
function EditCoordonneesForm(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [adresse, setAdresse] = useState(props.user?.adresse);
  const [website, setWebsite] = useState(props.user?.website);
  const [email, setEmail] = useState(props.user?.email);
  const [tele, setTele] = useState(props.user?.tele);

  const state = {
    startTime: "",
    endTime: "",
    day: "",
    month: "",
    year: "",
    // date: "",
  };
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(
      "/api/user/"+ user._id,
      {adresse, email, website, tele}
    ).then(window.location.reload(false))
  };

  return (
    <Modal
      isOpen={props.modalState}
      ariaHideApp={false}
      onRequestClose={props.openModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalHeader>Modifier vos coordonnees</ModalHeader>
      <form onSubmit={onSubmit}>
        <ModalBody>
          <label
            style={{ whiteSpace: "nowrap", float: "left", marginLeft: "-1px" }}
            htmlFor="adresse"
            className="form-label"
          >
            Adresse
          </label>
          <div className="form-row">
            <input
              value={adresse}
              name="adresse"
              onChange={(e) => setAdresse(e.target.value)}
              className="form-input"
            />
          </div>

          <label
            style={{ whiteSpace: "nowrap", float: "left", marginLeft: "-1px" }}
            htmlFor="site-web"
            className="form-label"
          >
            Site Web
          </label>
          <div className="form-row">
            <input
              value={website}
              name="site-web"
              onChange={(e) => setWebsite(e.target.value)}
              className="form-input"
            />
          </div>

          <label
            style={{ whiteSpace: "nowrap", float: "left", marginLeft: "-1px" }}
            htmlFor="tele"
            className="form-label"
          >
            Numero de telephone
          </label>
          <div className="form-row">
            <input name="tele" value={tele} onChange={(e) => setTele(e.target.value)} className="form-input" />
          </div>

          <label
            style={{ whiteSpace: "nowrap", float: "left", marginLeft: "-1px" }}
            htmlFor="email"
            className="form-label"
          >
            E-mail
          </label>
          <div className="form-row">
            <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" />
          </div>
        </ModalBody>
        <ModalFooter>
          <ModalSubmit>Submit</ModalSubmit>
          <ModalCancel onClick={props.openModal}>Cancel</ModalCancel>
        </ModalFooter>
      </form>
    </Modal>
  );
}

export default EditCoordonneesForm;
