import { Divider } from "@mui/material";
import React from "react";
import CardHeader from "./cardHeader";
import CardBody from "./cardMainBody";
import "./css/handPickedCard.css"

const HandPickedCard = () => {
    return (
        <div className="container">
         <Divider></Divider>   
         <CardHeader></CardHeader>
         <CardBody></CardBody>
        </div>
    )
}

export default HandPickedCard;