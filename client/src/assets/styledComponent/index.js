import styled from "styled-components";

export const DateDataContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateContainer = styled.div`
  text-align: center;
  width: 100%;
  color: #000;
  background: #89cff0;
  font-size: 12px;
`;

export const DateApointmentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  margin: 15px;
`;

export const CalendarContainerBody = styled.div`
  color: blue;
  margin-top: 5px;
`;

export const CalenderWeekContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export const CalenderWeekDayContainer = styled.div`
  margin: 1px;
  border: 1px solid gray;
  text-align: center;
  height: 25px;
  color: #000;
`;

export const CalenderDateContainer = styled.div`
  display: grid;
  margin-top: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;
export const CalenderDateDayContainerDisable = styled.div`
  margin: 1px;
  text-align: center;
  height: 80px;
`;
export const CalenderDateDayContainerActive = styled.div`
  margin: 1px;
  border: 1px solid gray;
  text-align: center;
  height: 80px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;

export const ModalHeader = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;

export const ModalBody = styled.div`
  width: 100%;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 15px 0px;
  height: 30px;
  align-items: center;
`;

export const InputSpan = styled.div`
  width: 30%;
`;

export const TextArea = styled.textarea`
  width: 80%;
  margin-top: 130px;
  margin-right: 10px;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
`;
export const InputField = styled.input`
  width: 70%;
  height: 25px;
  border-radius: 5px;
  &:focus {
    border: 3px solid #89cff0;
    outline: none;
  }
`;

export const ModalFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const ModalSubmit = styled.button`
  width: 40%;
  height: 40px;
  margin-bottom: 0px;
  background: #228c22;
  color: #fff;
`;
export const ModalCancel = styled.button`
  width: 40%;
  margin-bottom: 0px;
  height: 40px;
  background: #f68a06;
  color: #fff;
`;
export const ModalSubmit2 = styled.button`
  width: 40%;
  margin-top: 130px;
  height: 40px;
  margin-bottom: 0px;
  background: #228c22;
  color: #fff;
`;

export const ModalCancel2 = styled.button`
  width: 40%;
  margin-bottom: 0px;
  height: 40px;
  margin-top: 130px;
  background: #f68a06;
  color: #fff;
`;

export const AppointmentContainer = styled.div`
  width: 100%;
  color: #fff;
  background: #000080;
  height: 25px;
  padding-top: 5px;
`;

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    padding: "10px",
    border: "1px solid #000",
  },
};
export const calendarStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "1000px",
    padding: "10px",
    border: "1px solid #000",
  },
};
export const presentationCustomStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    height: "300px",
    padding: "10px",
    border: "1px solid #000",
  },
};

export const CalenderHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const DropdownContainer = styled.div`
  display: flex;
`;

export const AppointmentButton = styled.button`
  border: 1px solid black;
  background: #2cb1bc;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

export const TagInput = styled.div`
  .App {
    font-family: sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    margin-top: 50px;
  }

  .tag-container {
    margin: auto;
    margin-top: 5px;
    margin-bottom: 20px;
    min-width: 60%;
    max-width: 90%;
    display: flex;
    flex-wrap: wrap;
    min-height: 30px;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
  }
  .tag {
    display: flex;
    align-items: center;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    height: 25px;
    margin: 2px 5px 2px 0px;
    color: Black;
  }

  .tag-container input {
    border: none;
    flex: 1;
    outline: none;
    padding: 5;
    color: Black;
  }
  .tag span {
    margin-left: 5px;
    cursor: pointer;
  }
`;
