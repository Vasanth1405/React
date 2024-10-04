import React from "react";
import "./css/handPickedCard.css"

const CardHeader = () => {
    return (
        <div className="ListingPageBody_handpickedHeader">
            <div className="ListingPageBody_handpickedMainHeading">Staff
                <span>HandPicked</span>
            </div>
            <div class="ListingPageBody_handpickedSubHeding">Curated with expertise</div>
        </div>
    )
}

export default CardHeader;