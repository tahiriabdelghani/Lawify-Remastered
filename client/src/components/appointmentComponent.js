import { AppointmentContainer } from "../assets/styledComponent/index";
import { Link } from "react-router-dom";

function Appointment(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const link = `/book-appointment/${props.selectedAvocat}/${props.appointmentId}/${props.date}/${props.startTime}/${props.endTime}`;
  return (
    <>
      {props.selectedAvocat === user._id || props.selectedAvocat ===undefined? (
        <AppointmentContainer>
          {props.startTime} - {props.endTime}
        </AppointmentContainer>
      ) : (
        <Link style={{ textDecoration: "none" }} to={link}>
          <AppointmentContainer>
            {props.startTime} - {props.endTime}
          </AppointmentContainer>
        </Link>
      )}
    </>
  );
}

export default Appointment;
