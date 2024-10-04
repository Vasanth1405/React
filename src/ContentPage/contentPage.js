import React from "react";
import ReadMoreModal from "./ReadMoreModal/readMoreModal";
import HandPickedCard from "./HandPickedCard/handPickCard";
import ReviewOverView from "./ReviewOverview/reviewOverview";

const ContentPage = () => {
    return(
        <>
            <ReadMoreModal></ReadMoreModal>
            <HandPickedCard></HandPickedCard>
            <ReviewOverView></ReviewOverView>
        </>
    )
}

export default ContentPage;