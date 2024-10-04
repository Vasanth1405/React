import React from "react";
import { Divider } from "@mui/material";
import "./css/reviewOverview.css";
import RatingBox from "./overAllRatingBox";
import ReviewCardList from "./reviewCardList";

const ReviewOverView = () => {
  return (
    <div className="container">
      <Divider>
        <div className="dividerDiv">
          People Love Our <span className="dividerSpan">Meghalaya</span>Tours
        </div>{" "}
      </Divider>
      <div className="reviewStripCardContainer">
        <RatingBox></RatingBox>
        <ReviewCardList></ReviewCardList>
      </div>
      <Divider></Divider>
      <div className="groupdeals"></div>
      <Divider></Divider>
    </div>
  );
};

export default ReviewOverView;
