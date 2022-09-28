import Modal from "react-modal";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {
  ModalCancel,
  ModalSubmit,
  ModalFooter,
  InputField,
  TagInput,
  InputSpan,
  InputContainer,
  ModalBody,
  ModalHeader,
  customStyles,
} from "../assets/styledComponent/index";

function EditInfosForm2(props) {
  const [domaines, setDomaines] = useState(props.userData?.domaines);
  const [adresse, setAdresse] = useState(props.userData?.adresse);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(`userData props ${props.userData}`)


  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(
      "/api/user/"+ user._id,
      {domaines, adresse}
    ).then(window.location.reload(false))
  };

  const handleAdresse = (e)=>{
    setAdresse(e.target.value)
    console.log(adresse)
  }

  const addDomaine = (e) => {
    if (e.key === "Shift") {
      if (e.target.value.length > 0) {
        setDomaines([...domaines, e.target.value]);
        e.target.value = "";
      }
    }
  };
  const removeDomaine = (removedDomaine) => {
    const newDomaine = domaines.filter((domaine) => domaine !== removedDomaine);
    setDomaines(newDomaine);
  };


  return (
    <Modal
      isOpen={props.modalState}
      ariaHideApp={false}
      onRequestClose={props.openModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalHeader>Modifier vos informations</ModalHeader>
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
              onChange={handleAdresse}
              className="form-input"
            />
          </div>
          Domaines
          <TagInput className="App">
            <div className="tag-container">
              {domaines?.map((domaine, index) => {
                return (
                  <div key={index} className="tag">
                    {domaine}{" "}
                    <span onClick={() => removeDomaine(domaine)}>
                      <i className="fas fa-times-circle"></i>
                    </span>
                  </div>
                );
              })}

              <input
                placeholder="Enter text and click shift to add"
                onKeyDown={addDomaine}
              />
            </div>
          </TagInput>
          
        </ModalBody>
        <ModalFooter>
          <ModalSubmit>Submit</ModalSubmit>
          <ModalCancel onClick={props.openModal}>Cancel</ModalCancel>
        </ModalFooter>
      </form>
    </Modal>
  );
}

export default EditInfosForm2;
