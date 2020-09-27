import React from "react";
import bannerImage from "./assests/images/banner.png";

function Home() {
  return (
    <div className="row header_Container gx-0">
      <div className="col-10 mx-auto d-flex">
        <div className="row ">
          <div className="col-md-6  mx-auto col-12  order-md-1 order-2  d-flex justify-content-center flex-column align-items-center">
            <p className="header_TextHeading ">
              Grow Your Knowledge with
              <br />
              <span className="header_TextHeading_Always">Always</span>
              <span className="header_TextHeading_Learning">Learning</span>
              <br />
              <span className="header_Banner_TagLine ">
                Don't stop learning in life. Just learn learn and learn the new
                things.
              </span>
            </p>
            <button className="btn btn-outline-info mr-auto header_getStarted_btn">
              Get Started
            </button>
          </div>
          <div className="col-md-6 col-12 order-md-2 order-1  d-flex align-items-center justify-content-center align-items-center">
            <img
              src={bannerImage}
              alt="bannerImage"
              className="header_BannerImage img-fluid "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
