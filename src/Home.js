import React from "react";
import bannerImage from "./assests/images/banner.png";
import CompanyCard from './components/CompanyCard'
import HomeProductRow from './components/HomeProductRow'
import Testimonials from './components/Testimonials';
import Havells from './assests/images/havells.png'
import Jaguar from './assests/images/Jaguar.jpg'


function Home() {
  return (
    <>
      <div className="row header_Container gx-0">
        <div className="col-10 mx-auto d-flex">
          <div className="row ">
            <div className="col-md-6  mx-auto col-12  order-md-1 order-2  d-flex justify-content-center flex-column align-items-center">
              <p className="header_TextHeading ">
                Grow Your Electrical Bussines with
              <br />
                <span className="header_TextHeading_Always">Satik</span>
                <span className="header_TextHeading_Learning">Solutions</span>
                <br />
                <span className="header_Banner_TagLine ">
                  we are sell electrical goods at wholeSell price. We give a regular discount/gifs offer to our retrailers .
              </span>
              </p>
              <button className="btn btn-outline-info mr-auto header_getStarted_btn">
                Call Now
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

      <div className="container  mt-5">
        <div className="row pt-4">
          <div className="col-12 text-center mb-4">
            <h3>Companies Products</h3><span>We have</span>
          </div>
          <div className="row">
            <div className="col-12 d-flex  flex-wrap justify-content-center">
              <CompanyCard imageUrl={Havells} />
              <CompanyCard imageUrl={Jaguar} />
              <CompanyCard imageUrl={Havells} />
              <CompanyCard imageUrl={Havells} />
              <CompanyCard imageUrl={Havells} />
              <CompanyCard imageUrl={Havells} />
              <CompanyCard imageUrl={Havells} />
              <CompanyCard imageUrl={Havells} />
            </div>
          </div>
        </div>
      </div>

      <HomeProductRow
        imageUrl_1={bannerImage}
        imageUrl_2={Jaguar}
        imageUrl_3={bannerImage}
        sliderAlignment="right"
        description=''
        title='Electrical Tapes'
      />

      <HomeProductRow
        imageUrl_1={bannerImage}
        imageUrl_2={Jaguar}
        imageUrl_3={bannerImage}
        sliderAlignment="left"
        description=''
        title='Thermal Tapes'
      />

      <HomeProductRow
        imageUrl_1={bannerImage}
        imageUrl_2={Jaguar}
        imageUrl_3={bannerImage}
        sliderAlignment="right"
        description=''
        title='Switches '
      />

      <HomeProductRow
        imageUrl_1={bannerImage}
        imageUrl_2={Jaguar}
        imageUrl_3={bannerImage}
        sliderAlignment="left"
        description=''
        title='Fans'
      />

      <div className="container">

        <div className="row">
          <div className="col-12 text-right">
            More...</div>
        </div>
      </div>

      <Testimonials />
    </>
  );
}

export default Home;
