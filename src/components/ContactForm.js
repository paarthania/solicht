import React, { useState } from "react";
import "../styles/ContactForm.css";
import "../styles/Header.css";
import axios from "axios";

const selectListStyle = {
  fontSize: "16px",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  borderColor: "white",
  borderRadius: "10px",
  marginTop: "10px",
  fontFamily: "Montserrat",
  paddingLeft: "20px",
  paddingRight: "20px",
  paddingTop: "5px",
  paddingBottom: "5px",
  maxWidth: "99%",
};

const roofingOptions = [
  { value: "", label: "Wählen Sie eine Option" },
  { value: "Tonziegel", label: "Tonziegel" },
  { value: "Betondachstein", label: "Betondachstein" },
  { value: "Trapezblech", label: "Trapezblech" },
  { value: "Eternit Dachplatten", label: "Eternit Dachplatten" },
  { value: "Schindeln", label: "Schindeln" },
  { value: "Prefa", label: "Prefa" },
  {
    value: "Flachdach mit Balastierung",
    label: "Flachdach mit Balastierung",
  },
  {
    value: "Ich bin mir nicht sicher",
    label: "Ich bin mir nicht sicher",
  },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    mainIssue: "",
    firstName: "",
    familyName: "",
    email: "",
    roofType: "",
    roofingType: "",
    buildingType: "",
    housingCount: "",
    sqrmeter: "",
    buildingYear: "",
    isMemorial: "",
    telefonnummer: "",
    adresse: "",
  });
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("/send-email", { emailData: formData })
      .then((response) => {
        console.log(response.data);
        // Handle success
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // Handle error
      });
  };

  // Effect to enable/disable submit button
  React.useEffect(() => {
    const { firstName, familyName, email } = formData;
    const isFormValid = firstName && familyName && email;
    setSubmitDisabled(!isFormValid);
  }, [formData]);

  return (
    <div
      className="formBody"
      style={{ fontFamily: "Montserrat", fontSize: "17px" }}
    >
      <h3
        style={{
          display: "flex",
          width: "600px",
          maxWidth: "99%",
          marginTop: "50px",
          color: "#F7941D",
        }}
      >
        Beantworten Sie bitte die nachfolgenden Fragen, damit wir uns mit Ihnen
        zeitnahen Verbindung setzten können:
      </h3>
      <form style={{ maxWidth: "79%" }} onSubmit={handleSubmit}>
        <div>
          <label style={{ fontSize: "18px" }}>
            Welchen Dienst bevorzugen Sie für Ihr Gebäude? <br />
            <select
              name="mainIssue"
              value={formData.mainIssue}
              style={selectListStyle}
              onChange={handleChange}
            >
              <option value="">Wählen Sie eine Option</option>
              <option value="pvanlagen">PV-Anlagen Installation</option>
              <option value="energieberatung">Energieberatung</option>
            </select>
          </label>
        </div>
        {formData.mainIssue === "pvanlagen" && (
          <div style={{ marginTop: "20px" }}>
            <label style={{ fontSize: "18px" }}>
              Bitte geben Sie Uns Ihren Gebäudetyp an: <br />
              <select
                name="buildingType"
                value={formData.buildingType}
                style={selectListStyle}
                onChange={handleChange}
              >
                <option value="">Wählen Sie eine Option</option>
                <option value="Wohngebäude">Wohngebäude</option>
                <option value="Büro, Laden, Praxis o.ä.">
                  Büro, Laden, Praxis o.ä.
                </option>
                <option value="Halle, Lager o.ä.">Halle, Lager o.ä.</option>
                <option value="Mishnutzung (Gewerbe und Wohnen)">
                  Mishnutzung (Gewerbe und Wohnen)
                </option>
              </select>
            </label>
            <div
              style={{
                marginTop: "25px",
                marginBottom: "20px",
              }}
            >
              <label style={{ fontSize: "18px" }}>
                Bitte wählen Sie die Art Ihres Dach aus:
              </label>
              {["Flachdach", "Pultdach", "Satteldach", "Walmdach"].map(
                (roofType) => (
                  <div
                    key={roofType}
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="radio"
                      id={roofType}
                      name="roofType"
                      value={roofType}
                      onChange={handleChange}
                    />
                    <label htmlFor={roofType}>
                      <img
                        style={{
                          width: "50px",
                          marginLeft: "5px",
                          marginRight: "5px",
                        }}
                        src={require(`../images/roofs/${roofType}.png`)}
                        alt={roofType}
                        loading="lazy"
                      />
                    </label>
                    {roofType}
                  </div>
                )
              )}
            </div>
            <label style={{ fontSize: "18px" }}>
              Bitte geben Sie Uns Ihren Gebäudetyp an: <br />
              <select
                name="roofingType"
                value={formData.roofingType}
                style={selectListStyle}
                onChange={handleChange}
              >
                {roofingOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        )}
        {formData.mainIssue === "energieberatung" && (
          <div style={{ marginTop: "20px" }}>
            <label style={{ fontSize: "18px" }}>
              Bitte geben Sie Uns Ihren Haustyp an: <br />
              <select
                name="hausType"
                value={formData.hausType}
                style={selectListStyle}
                onChange={handleChange}
              >
                <option value="">Wählen Sie eine Option</option>
                <option value="Einfamilienhaus">Einfamilienhaus</option>
                <option value="Zweifamilienhaus">Zweifamilienhaus</option>
                <option value="Mehrfamilienhaus">Mehrfamilienhaus</option>
              </select>
            </label>
            <div style={{ marginTop: "25px", marginBottom: "20px" }}>
              <label style={{ fontSize: "18px" }}>
                Bitte geben Sie uns Anzahl der Einheiten an (Falls mehrere
                Einheiten vorhanden): <br></br>
              </label>
              <input
                style={{
                  paddingLeft: "30px",
                  marginTop: "10px",
                  width: 40,
                  height: 35,
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  borderColor: "transparent",
                  borderRadius: 20,
                  fontSize: "18px",
                }}
                placeholder="0"
                type="text"
                id="housingCount"
                name="housingCount"
                value={formData.housingCount}
                onChange={handleChange}
              />
            </div>
            <div style={{ marginTop: "25px", marginBottom: "20px" }}>
              <label style={{ fontSize: "18px" }}>
                Teilen Sie uns mit, wie groß die Wohnfläche in Quadratmetern
                ist: <br></br>
              </label>
              <input
                style={{
                  paddingLeft: "20px",
                  marginTop: "10px",
                  width: 40,
                  height: 35,
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  borderColor: "transparent",
                  borderRadius: 20,
                  fontSize: "18px",
                }}
                placeholder="70"
                type="text"
                id="sqrmeter"
                name="sqrmeter"
                value={formData.sqrmeter}
                onChange={handleChange}
              />
            </div>
            <div style={{ marginTop: "25px", marginBottom: "20px" }}>
              <label style={{ fontSize: "18px" }}>
                In welchem Jahr wurde Ihr Gebäude erbaut?<br></br>
              </label>
              <input
                style={{
                  paddingLeft: "20px",
                  marginTop: "10px",
                  width: 60,
                  height: 35,
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  borderColor: "transparent",
                  borderRadius: 20,
                  fontSize: "18px",
                }}
                placeholder="1990"
                type="text"
                id="buildingYear"
                name="buildingYear"
                value={formData.buildingYear}
                onChange={handleChange}
              />
            </div>
            <div style={{ marginTop: "25px", marginBottom: "20px" }}>
              <label style={{ fontSize: "18px" }}>
                Befindet sich Ihr Gebäude unter Denkmalschutz? <br></br>
                <select
                  name="isMemorial"
                  value={formData.isMemorial}
                  style={selectListStyle}
                  onChange={handleChange}
                >
                  <option value="">Wählen Sie eine Option</option>
                  <option value="Ja">Ja</option>
                  <option value="Nein">Nein</option>
                </select>
              </label>
            </div>
          </div>
        )}
        {formData.mainIssue && (
          <div>
            <div>
              <label>
                <br />
                <br />
                Bevor wir abschließen, bitten wir Sie um einen letzten Schritt:{" "}
                <br />
                Teilen Sie uns bitte Ihre Kontaktdaten mit, damit wir Sie
                erreichen können.
              </label>
              <br />
              <label>Vorname: </label>
              <input
                style={{
                  marginLeft: "10px",
                  marginTop: "10px",
                  width: 90,
                  height: 25,
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  borderColor: "transparent",
                  borderRadius: 20,
                  fontSize: "18px",
                }}
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label> Nachname: </label>
              <input
                style={{
                  marginLeft: "10px",
                  marginTop: "10px",
                  width: 90,
                  height: 25,
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  borderColor: "transparent",
                  borderRadius: 20,
                  fontSize: "18px",
                }}
                type="text"
                name="familyName"
                value={formData.familyName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Telefonnummer:</label>
              <input
                style={{
                  marginLeft: "10px",
                  marginTop: "10px",
                  width: 200,
                  height: 25,
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  borderColor: "transparent",
                  borderRadius: 20,
                  fontSize: "18px",
                }}
                type="text"
                name="telefonnummer"
                value={formData.telefonnummer}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                style={{
                  marginLeft: "10px",
                  marginTop: "10px",
                  width: 200,
                  height: 25,
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  borderColor: "transparent",
                  borderRadius: 20,
                  fontSize: "18px",
                }}
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <label>
              <br />
              Standortangabe: Wo möchten Sie unsere Dienstleistung in Anspruch
              nehmen?
              <br />
            </label>
            <div>
              <label>Adresse:</label>
              <input
                style={{
                  maxWidth: "95%",
                  marginLeft: "10px",
                  marginTop: "10px",
                  width: 500,
                  height: 25,
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  borderColor: "transparent",
                  borderRadius: 20,
                  fontSize: "18px",
                }}
                type="text"
                name="adresse"
                value={formData.adresse}
                onChange={handleChange}
              />
            </div>
            <button
              style={{
                fontFamily: "Montserrat",

                padding: "10px 15px",
                marginTop: "20px",
                borderRadius: "40px",
                borderColor: "transparent",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#2F6185",
                marginBottom: "90px",
              }}
              type="submit"
              disabled={submitDisabled}
            >
              senden
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
