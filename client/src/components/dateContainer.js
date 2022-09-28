import { connect } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";
import Appointment from "../components/appointmentComponent";
import {
  DateDataContainer,
  DateContainer,
  DateApointmentContainer,
} from "../assets/styledComponent/index";
import { useState } from "react";

function DateComponent(props) {
  const link = `/book-appointment/`;
  return (
    <>
      <DateDataContainer>
        <DateContainer>{props.date}</DateContainer>
        <DateApointmentContainer>
          {props.appointments.map((appointment) =>
            appointment.date ===
            props.date + "-" + props.month + "-" + props.year ? (
              <button style={{ margin: "0px", cursor: "pointer" }}>
                <Appointment
                  startTime={appointment.startTime}
                  endTime={appointment.endTime}
                  selectedAvocat={props.selectedAvocat}
                  date={appointment.date}
                  appointmentId={appointment._id}
                ></Appointment>
              </button>
            ) : null
          )}
        </DateApointmentContainer>
      </DateDataContainer>
    </>
  );
}

export default DateComponent;
