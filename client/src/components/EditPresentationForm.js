import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAppContext } from "../context/appContext";

import axios from "axios";
import {
  ModalCancel2,
  ModalSubmit2,
  ModalFooter,
  TextArea,
  InputSpan,
  InputContainer,
  presentationCustomStyles,
  ModalBody,
  ModalHeader,
} from "../assets/styledComponent/index";

function EditPresentationForm(props) {
  const [presentation, setPresentation] = useState(props.user?.presentation);
  const { showAlert, displayAlert, updateUser, isLoading } = useAppContext();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(
      "/api/user/"+ user._id,
      {presentation}
    ).then(window.location.reload(false))
  };

  return (
    <Modal
      isOpen={props.modalState}
      ariaHideApp={false}
      onRequestClose={props.openModal}
      style={presentationCustomStyles}
      contentLabel="Example Modal"
    >
      <ModalHeader>Modifier votre presentation</ModalHeader>
      <form onSubmit={handleSubmit}>
        <ModalBody>
          <InputContainer>
            <InputSpan>Presentation :</InputSpan>
            <TextArea
              value={presentation}
              onChange={(e) => setPresentation(e.target.value)}
              type="textarea"
              placeholder="Saisir votre nouvelle presentation"
            ></TextArea>
          </InputContainer>
        </ModalBody>
        <ModalFooter>
          <ModalSubmit2>Submit</ModalSubmit2>
          <ModalCancel2 onClick={props.openModal}>Cancel</ModalCancel2>
        </ModalFooter>
      </form>
    </Modal>
  );
}

export default EditPresentationForm;
