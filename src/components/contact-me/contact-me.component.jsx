import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./contact-me.styles.css";

const ContactMe = () => {
  const [details, setDetails] = useState({ name: "", email: "", message: "" });

  const onHandleChange = (event) => {
    const { name, value } = event.target;

    setDetails({ ...details, [name]: value });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = details;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent! Thank you"))
      .catch((error) => alert(error));
  };

  return (
    <section id="contactme" className="contactme">
      <div className="contactme__hero">
        <FontAwesomeIcon icon="envelope" size="4x" className="font_icon" />
        <h1 className="contactme__heading">Contact Me</h1>
        <div className="contactme__container">
          <div className="contactme__details">
            <h2 className="hireme">Hire Me</h2>
            <form netlify name="contact" onSubmit={onHandleSubmit}>
              <input
                className="hireme__input"
                type="text"
                placeholder="Name"
                name="name"
                value={details.name}
                onChange={onHandleChange}
              />
              <input
                className="hireme__input"
                type="email"
                placeholder="Email"
                name="email"
                value={details.email}
                onChange={onHandleChange}
              />
              <textarea
                className="hireme__input hireme__textarea"
                placeholder="Message..."
                name="message"
                value={details.message}
                onChange={onHandleChange}
              />

              <button type="submit" className="hireme__button">
                Hire Me
              </button>
            </form>
          </div>
          <div className="contactme__map">
            <div className="contactme__map__loc">
              <iframe
                width="100%"
                height="100%"
                title="My location"
                style={{
                  height: "100%",
                  width: "100%",
                  border: "0",
                  filter: "opcaity(0.7)",
                }}
                frameborder={0}
                src="https://www.google.com/maps/embed/v1/place?q=Rajarajeshwari+Nagar&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
