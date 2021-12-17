import React, { useState } from "react";
import "./Forms.css";

const Forms = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [zip, setZip] = useState("");
  const [patient, setPatient] = useState("");
  const [physician, setPhysician] = useState("");

  const [showFirstNameError, setShowFirstNameError] = useState(false);
  const [showLastNameError, setShowLastNameError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPhoneError, setShowPhoneError] = useState(false);
  const [showOrgError, setShowOrgError] = useState(false);
  const [showZipError, setShowZipError] = useState(false);
  const [showPatientError, setShowPatientError] = useState(false);
  const [showPhysicianError, setShowPhysicianError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    alert("ok");
    const isValid = isEnabled();
  };
  const isEnabled = () => {
    let isValid = true;

    if (
      !showFirstNameError ||
      !showLastNameError ||
      !showEmailError ||
      !showPhoneError ||
      !showZipError ||
      !showOrgError ||
      !showPatientError ||
      !showPhysicianError
    ) {
      isValid = false;
    }
    return isValid;
  };

  const errorField = "This field can't be empty";

  const handleFirstName = (event) => {
    event.preventDefault();
    setFirstName(event.target.value);
    console.log(event.target.value);
    if (event.target.value.length === 0) {
      console.log("empty");
      setShowFirstNameError(true);
    } else {
      setShowFirstNameError(false);
    }
  };

  const handleLastName = (event) => {
    event.preventDefault();
    setLastName(event.target.value);
    console.log(event.target.value);
    if (event.target.value.trim().length === 0) {
      console.log("empty");
      setShowLastNameError(true);
    } else {
      setShowLastNameError(false);
    }
  };

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
    console.log(event.target.value);
    if (event.target.value.trim().length < 5) {
      console.log("empty");
      setShowEmailError(true);
    } else {
      setShowEmailError(false);
    }
  };

  const handlePhone = (event) => {
    event.preventDefault();
    setPhone(event.target.value);
    console.log(event.target.value);
    if (event.target.value.trim().length < 9) {
      console.log("empty");
      setShowPhoneError(true);
    } else {
      setShowPhoneError(false);
    }
  };

  const handleZip = (event) => {
    event.preventDefault();
    setZip(event.target.value);
    console.log(event.target.value);
    if (event.target.value.trim().length < 5) {
      console.log("empty");
      setShowZipError(true);
    } else {
      setShowZipError(false);
    }
  };

  const handleOrganization = (event) => {
    event.preventDefault();
    setOrganization(event.target.value);
    console.log(event.target.value);
    if (event.target.value.trim().length < 5) {
      console.log("empty");
      setShowOrgError(true);
    } else {
      setShowOrgError(false);
    }
  };

  const handlePatient = (event) => {
    event.preventDefault();
    setPatient(event.target.value);
    console.log(event.target.value);
    if (patient === "") {
      console.log("empty");
      setShowPatientError(true);
    } else {
      setShowPatientError(false);
    }
  };

  const handlePhysician = (event) => {
    setPhysician(event.target.value);
    console.log(event.target.value);
    if (physician === "") {
      console.log("empty");
      setShowPhysicianError(true);
    } else {
      setShowPhysicianError(false);
    }
  };

  let Fields = [
    {
      key: 0,
      type: "email",
      value: email,
      name: "email",
      id: "email",
      placeholder: "Email",
      pattern: "",
      inputmode: "",
      error: showEmailError,
      handler: handleEmail,
    },
    {
      key: 1,
      type: "tel",
      value: phone,
      name: "phone",
      id: "phone",
      placeholder: "Phone(xxx)(xxx-xxxx)",
      pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
      inputmode: "numeric",
      error: showPhoneError,
      handler: handlePhone,
    },
    {
      key: 2,
      type: "text",
      value: organization,
      name: "orgName",
      id: "orgName",
      placeholder: "Organization Name",
      pattern: "",
      inputmode: "",
      error: showOrgError,
      handler: handleOrganization,
    },
    {
      key: 3,
      type: "text",
      value: zip,
      name: "zip",
      id: "zip",
      placeholder: "Zip Code",
      pattern: "[0-9]{5}",
      inputmode: "numeric",
      error: showZipError,
      handler: handleZip,
    },
  ];

  const Name = [
    {
      type: "text",
      value: firstName,
      name: "firstName",
      id: "firstName",
      placeholder: "First Name",
      error: showFirstNameError,
      handler: handleFirstName,
    },
    {
      type: "text",
      value: lastName,
      name: "lastName",
      id: "lastName",
      placeholder: "Last Name",
      error: showLastNameError,
      handler: handleLastName,
    },
  ];

  return (
    <div className="main">
      <div className="testbox">
        <form onSubmit={onSubmit}>
          {Name.map((item) => {
            return (
              <div className="name-item">
                <input
                  type={item.type}
                  onChange={item.handler}
                  onFocus={item.handler}
                  value={item.value}
                  autoComplete="off"
                  name={item.name}
                  id={item.id}
                  placeholder={item.placeholder}
                  required
                />
                <div style={{ color: "red" }}>{item.error && errorField}</div>
              </div>
            );
          })}

          {Fields.map((item) => {
            return (
              <div className="contact-item">
                <input
                  type={item.type}
                  onChange={item.handler}
                  onFocus={item.handler}
                  value={item.value}
                  autoComplete="off"
                  name={item.name}
                  id={item.id}
                  placeholder={item.placeholder}
                  required
                />

                <div style={{ color: "red" }}>{item.error && errorField}</div>
              </div>
            );
          })}

          <div>
            <label htmlFor="patient">
              <p>Are you a patient?</p>
            </label>
            <ul className="patient">
              <li>
                <input
                  type="radio"
                  onChange={(event) => handlePatient(event)}
                  value="Yes"
                  id="Yes"
                  name="patient"
                />
                <label for="Yes">Yes</label>
              </li>
              <li>
                <input
                  type="radio"
                  onChange={(event) => handlePatient(event)}
                  value="No"
                  id="No"
                  name="patient"
                />
                <label for="No">No</label>
              </li>
            </ul>

            <div style={{ color: "red" }}>{showPatientError && errorField}</div>
            {/* <input type="radio" value="Yes" name="patient" />
          Yes
          <input type="radio" value="No" name="patient" /> No */}
          </div>
          <br />

          <div>
            <label htmlFor="physicians">
              <p>Number of physicians in your organization</p>
            </label>

            <ul className="physicians">
              <li>
                <input
                  type="radio"
                  id="1-6"
                  name="physicians"
                  onChange={(event) => handlePhysician(event)}
                  value="1-6"
                />
                <label for="1-6">1-6</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="7-20"
                  name="physicians"
                  onChange={(event) => handlePhysician(event)}
                  value="7-20"
                />
                <label for="7-20">7-20</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="21-150"
                  name="physicians"
                  onChange={(event) => handlePhysician(event)}
                  value="21-150"
                />
                <label for="21-150">21-150</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="150 or more"
                  name="physicians"
                  onChange={(event) => handlePhysician(event)}
                  value="150 or more"
                />
                <label for="150 or more">150 or more</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="NA"
                  name="physicians"
                  onChange={(event) => handlePhysician(event)}
                  value="Not applicable"
                />
                <label for="Not applicable">Not applicable</label>
              </li>
            </ul>
            {/* <input type="radio" value="1-6" name="physicians" />
          1-6
          <input type="radio" value="7-20" name="physicians" />
          7-20
          <input type="radio" value="21-150" name="physicians" />
          21-150
          <input type="radio" value="151ormore" name="physicians" />
          151ormore
          <input type="radio" value="Not applicable" name="physicians" />
          Not applicable */}

            <div style={{ color: "red" }}>
              {showPhysicianError && errorField}
            </div>
          </div>

          <br />
          <br />
          <small>
            By submitting your information, you agree to our
            <b> Privacy Policy</b> and <b>Terms of Use.</b>
          </small>

          <div className="btn-block">
            <br />
            <button
              type="submit"
              disabled={isEnabled}
              // style={{ backgroundColor:  isEnabled? grey : red }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forms;
