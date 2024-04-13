import React from "react";
import ImageHeading from "./ImageHeading";
import LikeAndComment from "./LikeAndComment";
import CommentsInput from "./CommentsInput";

function ImageCard(){
    return(
        <div className="imageCard">
            <ImageHeading />
            <img src="../images/profile-photos/prasadhp.jpeg" className="imageOnCard"/>
            <LikeAndComment />
            <CommentsInput />
        </div>
    )
}

export default ImageCard;