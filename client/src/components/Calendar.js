import Modal from "react-modal";
import { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import CalenderHeader from "../components/calenderHeader";
import DateComponent from "../components/dateContainer";
import {
  CalenderDateDayContainerActive,
  CalenderDateDayContainerDisable,
  CalenderDateContainer,
  CalenderWeekDayContainer,
  CalenderWeekContainer,
  CalendarContainerBody,
  CalendarContainer,
} from "../assets/styledComponent/index";
import { weekArray, gridArray } from "../constant/index";
import { useParams } from "react-router-dom";

import {
  ModalCancel,
  ModalFooter,
  calendarStyles,
} from "../assets/styledComponent/index";

const user = JSON.parse(localStorage.getItem("user"));
function Calendar(props) {
  const { year, month } = useParams();

  const [selectedYear, setSelectedYear] = useState(2022);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [modalState, setModalState] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const startOfDay = moment()
    .year(selectedYear)
    .month(selectedMonth)
    .startOf("month")
    .format("ddd");
  const monthSize = parseInt(
    moment().year(selectedYear).month(selectedMonth).endOf("month").format("DD")
  );

  const startIndex = weekArray.indexOf(startOfDay);
  const endIndex = startIndex + monthSize;

  useEffect(() => {
    const defaultYear = year || moment().format("YYYY");
    const defaultMonth = month || moment().format("MM");

    setSelectedYear(parseInt(defaultYear));
    setSelectedMonth(parseInt(defaultMonth) - 1);
  }, [year, month]);

  const onYearSelect = (year) => {
    const { value } = year;
    setSelectedYear(parseInt(value));
  };

  const onMonthSelect = (month) => {
    const { value } = month;
    setSelectedMonth(parseInt(value - 1));
  };

  useEffect(() => {
    console.log(`id: ${props.selectedAvocat}`);
    const getAppointments = async () => {
      try {
        const res = await axios.get(`/api/v1/calender/${props.selectedAvocat}`);
        setAppointments(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getAppointments();
  }, []);

  return (
    <Modal
      isOpen={props.calendarState}
      ariaHideApp={false}
      onRequestClose={props.openCalendar}
      style={calendarStyles}
      contentLabel="Example Modal"
    >
      <CalendarContainer>
        <CalenderHeader
          onYearSelect={onYearSelect}
          onMonthSelect={onMonthSelect}
          defaultYear={selectedYear.toString()}
          defaultMonth={(selectedMonth + 1).toString()}
        />
        <CalendarContainerBody>
          <CalenderWeekContainer>
            {weekArray.map((data, i) => (
              <CalenderWeekDayContainer key={i}>
                {data}
              </CalenderWeekDayContainer>
            ))}
          </CalenderWeekContainer>

          <CalenderDateContainer>
            {gridArray.map((data, i) =>
              i >= startIndex && i < endIndex ? (
                <CalenderDateDayContainerActive key={i}>
                  <DateComponent
                    date={i - startIndex + 1}
                    month={selectedMonth + 1}
                    year={selectedYear}
                    appointments={appointments}
                    onClick="true"
                    selectedAvocat={props.selectedAvocat}
                  />
                </CalenderDateDayContainerActive>
              ) : (
                <CalenderDateDayContainerDisable
                  key={i}
                ></CalenderDateDayContainerDisable>
              )
            )}
          </CalenderDateContainer>
        </CalendarContainerBody>
      </CalendarContainer>
      <ModalFooter>
        <ModalCancel className="presentation" onClick={props.openCalendar}>
          Cancel
        </ModalCancel>
      </ModalFooter>
    </Modal>
  );
}

export default Calendar;
