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

const theData = localStorage.getItem("appointMentData");

function EditCompetencesForm(props) {
  const { register, handleSubmit } = useForm();
  const [competences, setCompetences] = useState(props.user?.competences);
  const user = JSON.parse(localStorage.getItem("user"));

  const addCompetence = (e) => {
    if (e.key === "Shift") {
      if (e.target.value.length > 0) {
        setCompetences([...competences, e.target.value]);
        e.target.value = "";
      }
    }
  };
  const removeCompetence = (removedCompetence) => {
    const newCompetences = competences.filter(
      (competence) => competence !== removedCompetence
    );
    setCompetences(newCompetences);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(
      "/api/user/"+ user._id,
      {competences}
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
      <ModalHeader>Modifier vos competences</ModalHeader>
      <form onSubmit={onSubmit}>
        <ModalBody>
          <TagInput className="App">
            <div className="tag-container">
              {competences?.map((competence, index) => {
                return (
                  <div key={index} className="tag">
                    {competence}{" "}
                    <span onClick={() => removeCompetence(competence)}>
                      <i className="fas fa-times-circle"></i>
                    </span>
                  </div>
                );
              })}

              <input
                placeholder="Enter text and click shift to add"
                onKeyDown={addCompetence}
              />
            </div>
          </TagInput>
        </ModalBody>
        <ModalFooter>
          <ModalSubmit className="presentation">Submit</ModalSubmit>
          <ModalCancel className="presentation" onClick={props.openModal}>
            Cancel
          </ModalCancel>
        </ModalFooter>
      </form>
    </Modal>
  );
}

export default EditCompetencesForm;
