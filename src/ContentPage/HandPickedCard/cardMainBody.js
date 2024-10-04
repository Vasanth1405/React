import React, { useState, useEffect } from "react";
import "./css/handPickedCard.css";
import axios from "axios";

const CardBody = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/items")
      .then((response) => {
        console.log("response -->", response.data);
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="ProductCarousel_wrapper">
      <div className="GenericCarousel_genericCarouselContainer">
        <div className="GenericCarousel_genericCarouselItemsContainer">
          {items.map((item) => (
            <div className="ProductCarousel_productCardContainer" id={item._id}>
                <div className="HandPickedProductCard_topSection"></div>
                <div className="HandPickedProductCard_BottomSection">
                  <div className="HandPickedProductCard_firstRow">
                    <div class="HandPickedProductCard_duration">{item.duration}</div>
                    <div class="HandPickedProductCard_rating">{item.ratings}</div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardBody;
