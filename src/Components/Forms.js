import React, { useState} from "react";
import "./Forms.css";



const Forms = () => {

  const Inputs = {
    Fields: {
      key: [0, 1, 2, 3],
      type: ["email", "tel", "text", "text"],
      // onChangeHandlers: [
      //   { name: handleEmail },
      //   { name: handlePhone },
      //   { name: handleOrganization },

      //   { name: handleZip },
      // ],
      value: [email , phone ,  organization ,  zip ],

      name: ["email", "phone", "orgName", "zip"],
      id: ["email", "phone", "orgName", "zip"],
      placeholder: ["Email", "Phone(xxx)(xxx-xxxx)", "Organization Name"],
      pattern: ["", "[0-9]{3}-[0-9]{3}-[0-9]{4}", "", "[0-9]{5}"],
      inputmode: ["", "numeric", "", "numeric"],
      error: [
        { showEmailError },
        { showPhoneError },
        { showOrgError },
        { showZipError },
      ],
    },
  };
  let answers = [];
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [zip, setZip] = useState("");
  const [patient, setPatient] = useState("");
  const [physician, setPhysician] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    alert("ok");
    const isValid = isEnabled();
    // console.log(answers);

  };
  const isEnabled = () => {
    // if (answers.length === 8) {
    //   return true;
    // }
    // return false;
    let isValid = true;

    if (!showNameError || !showEmailError || !showPhoneError || !showZipError || !showOrgError || !showPatientError || !showPhysicianError) {
      isValid = false;
    }
    return isValid;

  }
  

  
  const errorField = "This field can't be empty";


  const handleFirstName = (event) => {
    event.preventDefault();
    setFirstName(event.target.value);
    console.log(event.target.value);  
    if (firstName.trim().length===0) {      
      console.log("empty");
      setShowNameError(true);
    } else {
      answers.push(firstName);
      setShowNameError(false);
    }
  };

  const handleLastName = (event) => {
    event.preventDefault();
    setLastName(event.target.value);
    console.log(event.target.value);
    if (lastName.trim().length === 0) {
      console.log("empty");
      setShowNameError(true);
    } else {
      answers.push(lastName);
      setShowNameError(false);
    }
  };

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
    console.log(event.target.value);
    if (email.trim().length < 5) {
      console.log("empty");
      setShowEmailError(true);
    } else {
      answers.push(email);
      setShowEmailError(false);
    }
  };

  const handlePhone = (event) => {
    event.preventDefault();
    setPhone(event.target.value);
    console.log(event.target.value);
    if (phone.trim().length < 9) {
      console.log("empty");
      setShowPhoneError(true);
    } else {
      answers.push(phone);
      setShowPhoneError(false);
    }
  };

  const handleZip = (event) => {
    event.preventDefault();
    setZip(event.target.value);
    console.log(event.target.value);
    if (zip.trim().length < 5) {
      console.log("empty");
      setShowZipError(true);
    } else {
      answers.push(zip);
      setShowZipError(false);
    }
  };

  const handleOrganization = (event) => {
    event.preventDefault();
    setOrganization(event.target.value);
    console.log(event.target.value);
    if (organization.trim().length < 5) {
      console.log("empty");
      setShowOrgError(true);
    } else {
      answers.push(organization);
      setShowOrgError(false);
    }
  };

  const handlePatient = (event) => {
    event.preventDefault();
    setPatient(event.target.value);
    console.log(event.target.value);
    if (patient==="") {
      console.log("empty");
      setShowPatientError(true);
    } else {
      answers.push(patient);
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
      answers.push(physician);
      
      setShowPhysicianError(false);
    }
  };
  const [showNameError, setShowNameError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPhoneError, setShowPhoneError] = useState(false);
  const [showOrgError, setShowOrgError] = useState(false);
  const [showZipError, setShowZipError] = useState(false);
  const [showPatientError, setShowPatientError] = useState(false);
  const [showPhysicianError, setShowPhysicianError] = useState(false);
  
  return (
    <div className="main">
      <div className="testbox">
        <form onSubmit={onSubmit}>
          <div className="name-item">
            <>
              <input
                type="text"
                onChange={(event) => handleFirstName(event)}
                value={firstName}
                autoComplete="off"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                required
              />

              <input
                type="text"
                onChange={(event) => handleLastName(event)}
                value={lastName}
                autoComplete="off"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                required
              />
            </>
          </div>
          <div style={{ color: "red" }}>{showNameError && errorField}</div>
          
          {Inputs.Fields.key &&
            Inputs.Fields.key.map((key) => {
              return (
                <div className="contact-item">
                  <input
                    type={Inputs.Fields.type[key]}
                    // onChange={(event) => { Inputs.Fields.onChangeHandlers[key].name } }
                    value={Inputs.Fields.value[key]}
                    autoComplete="off"
                    name={Inputs.Fields.name[key]}
                    id={Inputs.Fields.id[key]}
                    placeholder={Inputs.Fields.placeholder[key]}
                    required
                  />

                  <div style={{ color: "red" }}>{Inputs.Fields.error[key] && errorField}</div>
                </div>
              );
            }
            )
          }


         
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
