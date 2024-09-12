import "./css/reviewsByPlatform.css";
import tripAdv from "./images/tripadvisor-icon.png";
import trust from "./images/gold-star-icon.png";
import google from "./images/google-color-icon.png";
import reviewio from "./images/space-planet-icon.png";
import ReviewJson from "./json/reviewByPlatform.json";

const ReviewsByPlatform = (props) => {
  const {display} = props;
  const reviewIcons = [tripAdv, trust, google, reviewio];
  
  const bodyClass = display === "flex" ? "TrustFactorBlock_flexBody" : "TrustFactorBlock_gridBody";
  const containerClass = display === "flex" ? "TrustFactorBlock_flexContainer" : "TrustFactorBlock_gridContainer";
  const imageSize = display === "flex" ? "40px" : "20px";

  const ReviewsDiv = ReviewJson.reviews.map((review, index) => (
    <div key={index} className="TrustFactorBlock_tabItem">
      <div className="TrustFactorBlock_leftSection">
        <div className="TrustFactorBlock_tabIcon">
          <img src={reviewIcons[index]} style={{ width: imageSize }}></img>
        </div>
      </div>
      <div className="TrustFactorBlock_rightSection">
        <div className="TrustFactorBlock_tabDescription">{review.review}</div>
        <div className="TrustFactorBlock_tabTitle">{review.src}</div>
      </div>
    </div>
  ));

  return (
    <div className={bodyClass}>
      <div className={containerClass}>
        {ReviewsDiv}
      </div>
    </div>
  );
};

export default ReviewsByPlatform;
