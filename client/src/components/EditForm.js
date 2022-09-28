import Modal from "react-modal";
import { useForm } from "react-hook-form";
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

function FormModal(props) {
  const { register, handleSubmit } = useForm();

  const state = {
    startTime: "",
    endTime: "",
    day: "",
    month: "",
    year: "",
    // date: "",
  };

  const onSubmit = (data) => {
    if (data.Date && data.startTime && data.endTime) {
      props.onModalSubmit(data);
      props.openModal();
    }
  };

  return (
    <Modal
      isOpen={props.modalState}
      ariaHideApp={false}
      onRequestClose={props.openModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalHeader>Modifier {props.selectedSection=="Presentation"? "Presentation" : "nothing"}</ModalHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          <InputContainer>
            <InputSpan>Day :</InputSpan>
            <InputField
              {...register("Date")}
              type="number"
              min="1"
              max="31"
              placeholder="Type a number 1 - 31"
            />
          </InputContainer>
          <InputContainer>
            <InputSpan>startTime :</InputSpan>
            <InputField
              {...register("startTime")}
              type="time"
              // min="9"
              // max="18"
              placeholder="Type a number 9 - 18"
            ></InputField>
          </InputContainer>

          <InputContainer>
            <InputSpan>endTime :</InputSpan>
            <InputField
              {...register("endTime")}
              type="time"
              // min="9"
              // max="18"
              placeholder="Type a number 9 - 18"
            />
          </InputContainer>
        </ModalBody>
        <ModalFooter>
          <ModalSubmit>Submit</ModalSubmit>
          <ModalCancel onClick={props.openModal}>Cancel</ModalCancel>
        </ModalFooter>
      </form>
    </Modal>
  );
}

export default FormModal;
