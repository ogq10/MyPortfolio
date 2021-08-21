import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Socials from "../components/Socials";

const Result = () => {
  return <p className="success">Your message has been sent. I will be in touch ASAP.</p>;
};

function Contact() {
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yry2pik",
        "template_x7i749i",
        e.target,
        "user_inRhIos42QLqEaEMGFCKf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    showResult(true);
  };
  return (
    <form action="" onSubmit={sendEmail}>
      <div className="formWord">
        <h2 className="header"> Let's Chat! </h2>
        <span>Full Name</span>
        <br />
        <input className="input100" type="text" name="fullName" required />
        <br />

        <span>Phone Number</span>
        <br />
        <input className="input100" type="text" name="phone" required />
        <br />

        <span>Enter Email</span>
        <br />
        <input className="input100" type="text" name="email" required />
        <br />

        <span>Message</span>
        <br />
        <input className="input100" type="text" name="message" required />
        <br />

        <button className="submit"> Submit </button>

        <div className="row">{result ? <Result /> : null}</div>

        <div className="row">
          <Socials />
        </div>
      </div>
    </form>
  );
}

export default Contact;
