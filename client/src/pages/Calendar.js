import React, { useState, useEffect } from "react";
import moment from "moment";

import NavBar from "../components/NavBar/Navbar.js";
import CalenderHeader from "../components/calenderHeader";
import DateComponent from "../components/dateContainer";
import FormModal from "../components/FormModal";
import axios from "axios";
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

const user = JSON.parse(localStorage.getItem("user"));

function Calendar() {
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

  const openModal = () => {
    setModalState(!modalState);
  };

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const res = await axios.get(`/api/v1/calender/${user._id}`);
        setAppointments(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getAppointments();
  }, []);

  const onModalSubmit = (data) => {
    const date = data.Date + "-" + (selectedMonth + 1) + "-" + selectedYear;

    const payload = {
      startTime: data.startTime,
      endTime: data.endTime,
      date: date,
      createdBy: user._id,
      avocatName: user.name
    };
    // N.B that (startTime > endTime)
    axios({
      url: "/api/v1/calender",
      method: "POST",
      data: payload,
    })
      .then(() => {
        setAppointments([...appointments, payload]);
      })
      .catch(() => {
        console.log("Internal server error");
      });
  };

  return (
    <>
      <NavBar />
      <CalendarContainer>
        <CalenderHeader
          onYearSelect={onYearSelect}
          onMonthSelect={onMonthSelect}
          defaultYear={selectedYear.toString()}
          defaultMonth={(selectedMonth + 1).toString()}
          openModal={openModal}
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

      <FormModal
        modalState={modalState}
        openModal={openModal}
        onModalSubmit={onModalSubmit}
        dateRange={endIndex}
      />
    </>
  );
}

export default Calendar;
