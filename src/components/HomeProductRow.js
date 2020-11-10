import React from 'react'
import '../assests/css/homeProductRow.css'


function HomeProductRow(props) {
    return (
        <div className="container  ">
            <div className="row pt-4">
                <div className={`col-md-6  mx-auto col-12 pl-md-5  d-flex justify-content-center flex-column align-items-center ${props.sliderAlignment === 'left' ? 'order-md-2' : 'order-md-1'} order-2`}>
                    <p className="">
                        <span className="row_TextHeading">{props.title}</span>

                        <br />
                        <span className="row_description ">
                            we are sell electrical goods at wholeSell price. We give a regular discount/gifs offer to our retrailers .
              </span>
                    </p>
                    <button className="btn btn-outline-info mr-auto row_checkAll_btn">
                        Check All
            </button>
                </div>
                <div className={`col-md-6  mx-auto col-12   d-flex justify-content-center flex-column align-items-center ${props.sliderAlignment === 'left' ? 'order-md-1' : 'order-md-2'} order-1`}>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={props.imageUrl_1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={props.imageUrl_2} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={props.imageUrl_3} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeProductRow
