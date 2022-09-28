import React, { useEffect, useState } from "react";
import "./RequestDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import emailjs from "emailjs-com";

export default function RequestDetails() {
  const initailState = {
    avocatData: [],
    name: "",
    email: "",
    city: "",
    price: "",
    speciality: "",
    image: "",
    Status: "",
  };
  const [values, setValues] = useState(initailState);
  const requestId = useParams().requestId;
  console.log(requestId);

  useEffect(() => {
    getAvocatData();
  }, [requestId]);

  const getAvocatData = async () => {
    try {
      // console.log("test");
      const res = await axios("/api/users?userId=" + requestId);
      console.log(res.data);
      setValues(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // const sendConfirmationMessage = () => {
  var templateParams = {
    email: values.email,
    from_name: "Lawify Team",
    message:
      "You account has been confirmed, you a are welcome to Lawify as a lawyer. We rely on you to provide a good service for our clients, and we wish you a good journey and good luck for the next .",
    to_name: values.name,
  };

  //   emailjs.send("service_hexbv63", "template_gbyolgo", templateParams).then(
  //     function (response) {
  //       console.log("SUCCESS!", response.status, response.text);
  //     },
  //     function (error) {
  //       console.log("FAILED...", error);
  //     }
  //   );
  // };

  const ConfirmAvocatAccount = () => {
    axios.patch("/api/avoca/" + requestId);
    // window.location.reload();
    window.location.href = "/requests";
    emailjs.send("service_hexbv63", "template_gbyolgo", templateParams);
    //Send a email of Notification to the Lawyer
  };

  const rejectAvocatAccount = () => {
    axios.delete(`/api/users/${requestId}`);
    window.location.href = "/requests";
  };

  return (
    <div>
      <div className="center1">
        {" "}
        <div className="header">
          <p>{values.name}</p>
          <div className="imageCont">
            {" "}
            <img
              src={values.image}
              style={{
                maxWidth: "100%",
                maxHeight: "140px",
                minWidth: "100%",
                minHeight: "140px",
              }}
              alt="nothing"
            />
          </div>
        </div>
        <div className="informations">
          {" "}
          <>
            <div></div>
            <div style={{ marginRight: "60px" }}>
              <h4>
                email : <label>{values.email}</label>
              </h4>
            </div>
            <div>
              <h4>
                Spéciality : <label> {values.speciality}</label>
              </h4>
            </div>
            <div>
              <h4>
                Ville : <label> {values.city}</label>
              </h4>
            </div>
            <div>
              <h4>
                Prix : <label> {values.price} $/min</label>
              </h4>
            </div>
            <div>
              <h4>
                Numéro de téléphone : <label>{values.phoneNumber}</label>
              </h4>
            </div>
            <div>
              <h4>
                Status de compte : <label>{values.Status}</label>
              </h4>
            </div>
          </>
        </div>
        <div className="btn-container">
          {" "}
          <button className="editpwd" onClick={() => ConfirmAvocatAccount()}>
            Confirmer{" "}
          </button>
          <button className="deleteacc" onClick={() => rejectAvocatAccount()}>
            Rejecter{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
