import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
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

function EditInfosForm(props) {
  const [langues, setLangues] = useState(props.user?.langues);
  const [formations, setFormations] = useState(props.user?.formations);
  const [price, setPrice] = useState(props.user?.price);
  const user = JSON.parse(localStorage.getItem("user"));


  const handleOnChangeEnligne = () => {
    console.log("test");
    document.getElementById("enligneprice").disabled =
      !document.getElementById("enligneprice").disabled;
  };
  const handleOnChangeCabinet = () => {
    console.log("test");
    document.getElementById("cabinetprice").disabled =
      !document.getElementById("cabinetprice").disabled;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(
      "/api/user/"+ user._id,
      {langues, formations, price}
    ).then(window.location.reload(false))
  };

  const addLangue = (e) => {
    if (e.key === "Shift") {
      if (e.target.value.length > 0) {
        setLangues([...langues, e.target.value]);
        e.target.value = "";
      }
    }
  };
  const removeLangue = (removedLangue) => {
    const newLangues = langues.filter((langue) => langue !== removedLangue);
    setLangues(newLangues);
  };

  const addFormation = (e) => {
    if (e.key === "Shift") {
      if (e.target.value.length > 0) {
        setFormations([...formations, e.target.value]);
        e.target.value = "";
      }
    }
  };
  const removeFormation = (removedFormation) => {
    const newFormations = formations.filter(
      (formation) => formation !== removedFormation
    );
    setFormations(newFormations);
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
          Langues
          <TagInput className="App">
            <div className="tag-container">
              {langues?.map((langue, index) => {
                return (
                  <div key={index} className="tag">
                    {langue}{" "}
                    <span onClick={() => removeLangue(langue)}>
                      <i className="fas fa-times-circle"></i>
                    </span>
                  </div>
                );
              })}

              <input
                placeholder="Enter text and click shift to add"
                onKeyDown={addLangue}
              />
            </div>
          </TagInput>
          Diplomes et formations
          <TagInput className="App">
            <div className="tag-container">
              {formations?.map((formation, index) => {
                return (
                  <div key={index} className="tag">
                    {formation}{" "}
                    <span onClick={() => removeFormation(formation)}>
                      <i className="fas fa-times-circle"></i>
                    </span>
                  </div>
                );
              })}

              <input
                placeholder="Enter text and click shift to add"
                onKeyDown={addFormation}
              />
            </div>
          </TagInput>
          Tarifs
          <div className="form-row">
            <input
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="form-input"
            />
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

export default EditInfosForm;
