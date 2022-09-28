import React from "react";
import { Link } from "react-router-dom";

export default function SignUpSwitch() {
  return (
    <div>
      <h6
        style={{
          width: "50%",
          marginTop: "20px",
          display: "block",
          fontSize: "var(--smallText)",
          marginBottom: "0.5rem",

          letterSpacing: "var(--letterSpacing)",
        }}
      >
        Register as a :
      </h6>
      <div
        style={{
          display: "flex",
          flex: 1,
          width: "100%",
          whiteSpace: 1,
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <div style={{ flex: 1, float: "left", marginRight: "17px" }}>
          <Link to="/registeravocat">
            <button type="submit" className="btn btn-block">
              Lawyer
            </button>
          </Link>
        </div>
        <div style={{ flex: 1 }}>
          <Link to="/registeruser">
            {" "}
            <button
              style={{ backgroundColor: "#24262b" }}
              type="submit"
              className="btn btn-block"
            >
              Client
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
