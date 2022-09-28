import React from "react";
import Typical from "react-typical";

export default function TextHeader() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: "center",
        textAlign: "center",
      }}
    >
      <span>
        <h1 style={{ fontFamily: "sans-serif" }}>
          <Typical
            loop={Infinity}
            steps={[
              "Trouvez votre avocat",
              1000,
              "Prenez rendez-vous en consultation cabinet ou vidéo  ",
              2000,
            ]}
          />
        </h1>
      </span>
    </div>
  );
}
