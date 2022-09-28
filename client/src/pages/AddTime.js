import { FormRow, FormRowSelect, Alert } from "../components";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import TimePicker from "react-time-picker";
import { useState } from "react";

const AddTime = () => {
  const [value, onChange] = useState("10:00");

  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    endTime,
    startTime,
    jobLocation,
    day,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!endTime || !startTime) {
      displayAlert();
      return;
    }
    // if (isEditing) {
    //   editJob()
    //   return
    // }
    createJob();
  };
  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <Wrapper>
      <form className="form">
        <h4 style={{ marginBottom: "16px" }}>Ajouter une durée de travail</h4>
        {showAlert && <Alert />}
        <div className="form-center">
          {/* day */}
          <FormRowSelect
            name="day"
            labelText="Day"
            value={day}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          {/* position */}
          <FormRow
            type="text"
            name="startTime"
            value={startTime}
            handleChange={handleJobInput}
            labelText="Heure de début"
          />
          {/* company */}
          <FormRow
            type="text"
            name="endTime"
            value={endTime}
            handleChange={handleJobInput}
            labelText="Heure de fin"
          />

          {/* btn container */}
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Ajouter
            </button>
            {/* <button
              className="btn btn-block clear-btn"
              // onClick={(e) => {
              //   e.preventDefault();
              //   clearValues();
              // }}
            >
              clear
            </button> */}
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddTime;
