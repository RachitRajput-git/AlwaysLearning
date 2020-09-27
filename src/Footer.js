import React from "react";
import FooterLogo from "./assests/images/Logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer>
        <div className="row py-5 gx-0  footer_bg ">
          <div className="col-md-3 col-sm-6 col-xs-12 col-12  px-5  mx-auto">
            <img
              src={FooterLogo}
              className="footer_logo img-fluid"
              alt="logoImage"
            />
            <p className="footer_lightText">
              We find a useful value Knowledge for you.
              <br />
              <span className="footer_darkText">
                <strong>Be Curious, Be Ready.</strong>
              </span>
            </p>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-3 col-3 px-5 py-3 ">
            <p className="footer_darkText ">
              <strong className="footer_textUnderline">Explore</strong>
            </p>
            <p className="footer_lightText">
              <Link to="/">Home</Link>
              <br />
              <Link to="/about">About Us</Link>
              <br />
              <Link to="/services">Services</Link>
              <br />
              <Link to="/contact">Contact Us</Link>
            </p>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-3 col-3 px-5  py-3 ">
            <p className="footer_darkText">
              <strong className="footer_textUnderline">Follow</strong>
            </p>
            <p className="footer_lightText">
              <Link to="/">Facebook</Link>
              <br />
              <Link to="/about">Instagram</Link>
              <br />
              <Link to="/services">Twitter</Link>
              <br />
              <Link to="/contact">Telegram</Link>
              <br />
              <Link to="/contact">Discord</Link>
            </p>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-3 col-3 px-5 py-3 mx-auto ">
            <p className="footer_darkText">
              <strong className="footer_textUnderline">Legal</strong>
            </p>
            <p className="footer_lightText">
              <Link to="/">Terms & Condition</Link>
              <br />
              <Link to="/about">Privacy Policy</Link>
            </p>
          </div>
        </div>

        <div className="row mx-auto  footer_bg_band">
          <div className="col-12 my-2 text-center ">
            @2020 AlwaysLearning | All rights reseverd | Terms and Conditions |
            Made with
            <span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-heart-fill footer_heartIcon"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </span>
            by @RRLTeam
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
