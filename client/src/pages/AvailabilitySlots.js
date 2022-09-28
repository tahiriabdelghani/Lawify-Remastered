import React from "react";
import Navbar from "../components/NavBar/Navbar";
import "scheduler-calendar/dist/index.css";
import ScheduleSelector from "react-schedule-selector";

export default class AvailabilitySlots extends React.Component {
  state = { schedule: [] };

  handleChange = (newSchedule) => {
    this.setState({ schedule: newSchedule });
  };

  renderCustomDateCell = (time, selected, innerRef) => (
    <div style={{ textAlign: "center" }} ref={innerRef}>
      {selected ? "✅" : "❌"}
      {/* ✅ */}
    </div>
  );

  render() {
    return (
      <div>
        <Navbar />
        {console.log(this.state.schedule)}
        <div
          style={{
            justifyContent: "center",
            width: "80%",
            marginTop: "40px",
            marginLeft: "10%",
            flexDirection: "column",
            marginBottom: "30px",
          }}
        >
          <ScheduleSelector
            style={{ width: "100%" }}
            selection={this.state.schedule}
            numDays={6}
            minTime={8}
            maxTime={19}
            // unselectedColor="red"
            // selectedColor="#87eaf2"
            dateFormat="ddd D/M"
            // startDate={new Date("Fri May 18 2018 17:57:06 GMT-0700 (PDT)")}
            // hourlyChunks={2}
            // renderTimeLabel={this.renderCustomDateCell}
            // renderDateLabel={this.renderCustomDateCell}
            onChange={this.handleChange}
            renderDateCell={this.renderCustomDateCell}
          />
        </div>
        <div style={{ flexDirection: "row", display: "flex" }}>
          <h5
            style={{
              justifyContent: "center",
              marginTop: "40px",
              marginLeft: "30%",
              flexDirection: "column",
              marginBottom: "30px",
            }}
          >
            {" "}
            ✅ : Disponible
          </h5>
          <h5
            style={{
              justifyContent: "center",
              marginTop: "40px",
              marginLeft: "10%",
              flexDirection: "column",
              marginBottom: "30px",
            }}
          >
            {" "}
            ❌ : Non Disponible
          </h5>
        </div>
      </div>
    );
  }
}
