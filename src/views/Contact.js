/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import { CSSTransition } from "react-transition-group";

function Contact() {
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp(true);
  });
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_asx4t9d",
        "contact_form",
        form.current,
        "user_q5yqaKLhx50An7EY0QU2X"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    document.getElementById("someForm").reset();
    alert("You have sent email.");
  };
  return (
    <CSSTransition in={inProp} timeout={800} classNames="landing">
      <div style={{ width: "70%" }} className="flexBox">
        <p className="heading">Contact</p>
        <form id="someForm" ref={form} onSubmit={sendEmail}>
          <div className="flexBox">
            <label>Your Name</label>
            <input type="text" required name="user_name" />
            <label>Your Email</label>
            <input type="email" required name="from_name" />
            <label>Subject</label>
            <input type="text" required name="user_subject" />
            <label>Your Message</label>
            <textarea name="message" required rows={10} />
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </CSSTransition>
  );
}

export default Contact;
