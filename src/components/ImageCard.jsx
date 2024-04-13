import React from "react";
import ImageHeading from "./ImageHeading";
import LikeAndComment from "./LikeAndComment";

function ImageCard(){
    return(
        <div className="imageCard">
            <ImageHeading />
            <img src="../images/profile-photos/prasadhp.jpeg" className="imageOnCard"/>
            <LikeAndComment />
        </div>
    )
}

export default ImageCard;