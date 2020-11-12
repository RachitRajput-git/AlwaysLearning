import React from "react";
import "./assests/css/contact.css";

function Contact() {
  return (
    <div className="container mt-5">
      <div className="row row_custom_style">
        <div className="col-12 text-center mb-5">
          <h2>Get In Touch With Us</h2>
        </div>
        <div className="col-12 col-md-7">
          <div className="row">
            <div className="col-12 mb-3">
              <h4>Contact Form</h4>
            </div>
            <div className="col-12">
              <div className="form_container">
                <div className="input_div">
                  <input type="text" name="userName" id="userName" required />
                  <label htmlFor="userName">Name(required)</label>
                </div>

                <div className="input_div">
                  <input type="phone" name="phone" id="phone" required />
                  <label htmlFor="phone">Phone(required)</label>
                </div>

                <div className="input_div">
                  <input type="email" name="email" id="email" required />
                  <label htmlFor="email">Email(required)</label>
                </div>

                <div className="input_div">
                  <input type="text" name="subject" id="subject" required />
                  <label htmlFor="subject">Subject</label>
                </div>

                <div className="input_div">
                  <input type="text" name="messsage" id="messsage" required />
                  <label htmlFor="messsage">Mesaage(required)</label>
                </div>
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 mx-auto address_column ">
          <div className="col-12 mb-3">
            <h4>Address</h4>
          </div>
          <div className="col-12 mb-3">
            <p>SATIK SOLUTION PVT LTD</p>
            <p>Govind Puri ,Near Okhla Industrial Area New Delhi, 110019</p>
            <p>+91 8882662484</p>
            <p>info@satiksolution.in</p>
            <p>
              <strong>Working Hours :</strong> <br /> Monday—Saturday:
              9:00AM–6:00PM
              <br />
              Sunday: Holiday
            </p>
          </div>
          {/* <div className="col-12 mt-3 social_icon">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram" />
            <i className="fab fa-whatsapp" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
