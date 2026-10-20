import Layout from "../components/Layout";
import "../styles/AboutUs.css";
import "../styles/Contact.css";

const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.7395356297175!2d9.050999676168258!3d49.2434272735336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47978968920c9d85%3A0x31f82259acfe37a7!2sRingstra%C3%9Fe%2027%2C%2074906%20Bad%20Rappenau%2C%20Germany!5e0!3m2!1sen!2sch!4v1710268629408!5m2!1sen!2sch";

const Contact = () => (
  <Layout background="sky">
    <div className="aboutBody">
      <div className="contact-container">
        <h2>Kontakt</h2>
        <div className="contactBody">
          <div>
            <iframe
              title="Standort"
              src={MAP_URL}
              className="map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contactInnerBody">
            <p>
              <strong>Mail:</strong> info@solicht.com
            </p>
            <p>
              <strong>Telefon:</strong> 01788233108
            </p>
            <p>
              <strong>Adresse:</strong> Ringstraße 27,
              <br />
              74906 Bad Rappenau
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
