import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carouselImages from "./json/carouselImages.json";
import "./css/caroselView.css";
import trip1 from "./images/trip1.png";
import trip2 from "./images/trip2.png";
import trip3 from "./images/trip3.png";
import Divider from "@mui/material/Divider";
import AlertDialogSlide from "./connetExpertDialog"

const CarouselView = () => {
  console.log("carouselImages -->", carouselImages);
  const images = [trip1, trip2, trip3];

  const carouselImagesDiv = carouselImages.trips.map((trip, index) => (
    <div key={index} className="carousel-container">
      <img
        src={images[index]}
        alt={"Image" + (index + 1)}
        className="carousel-img"
      />
      <div className="carousel-text">
        <h1>{trip.header}</h1>
        <p>{trip.quote}</p>
        <Divider></Divider>
        <div className="banner_priceWrapperBox">
          <div className="banner_priceLabel">Starting at</div>
          <div className="banner_priceWrapper">
            <div className="banner_actualPrice">INR {trip.price}</div>
            <div className="banner_strikeThroughPrice">INR {trip.discount}</div>
          </div>
        </div>
        <AlertDialogSlide></AlertDialogSlide>
      </div>
      <div className="banner_divider"></div>
    </div>
  ));

  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      showStatus={false}
      interval={3000}
    >
      {carouselImagesDiv}
    </Carousel>
  );
};

export default CarouselView;
