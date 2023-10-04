import React from "react";
import "./Info.css";

function Contact() {
  return (
    <>

      <div className="contact-info">
      <h3>Contact us</h3>
      <p>
        Do you have any questions? Please do not hesitate to contact us
        directly. Our team will come back to you within a matter of hours to
        help you
      </p>
        <form>
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default Contact;
