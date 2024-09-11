import "./css/reviewsByPlatform.css";
import tripAdv from "./images/tripadvisor-icon.png";
import trust from "./images/gold-star-icon.png";
import google from "./images/google-color-icon.png";
import reviewio from "./images/christmas-star-decoration-icon.png";
import ReviewJson from "./json/reviewByPlatform.json";

const ReviewsByPlatform = () => {
  const reviewIcons = [tripAdv, trust, google, reviewio];

  const ReviewsDiv = ReviewJson.reviews.map((review, index) => (
    <div key={index} className="TrustFactorBlock_tabItem">
      <div className="TrustFactorBlock_leftSection">
        <div className="TrustFactorBlock_tabIcon">
          <img src={reviewIcons[index]} style={{ width: "40px" }}></img>
        </div>
      </div>
      <div className="TrustFactorBlock_rightSection">
        <div className="TrustFactorBlock_tabDescription">{review.review}</div>
        <div className="TrustFactorBlock_tabTitle">{review.src}</div>
      </div>
    </div>
  ));

  return (
    <div className="TrustFactorBlock_tabBody">
      <div className="TrustFactorBlock_tabContainer">
        {ReviewsDiv}
      </div>
    </div>
  );
};

export default ReviewsByPlatform;
