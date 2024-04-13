import React from "react";
import ImageHeading from "./ImageHeading";
import LikeCommentIcons from "./LikeCommentIcons";

function ImageCard(){
    return(
        <div className="imageCard">
            <ImageHeading />
            <img src="../images/profile-photos/prasadhp.jpeg" className="imageOnCard"/>
            <LikeCommentIcons />
        </div>
    )
}
export default ImageCard;   