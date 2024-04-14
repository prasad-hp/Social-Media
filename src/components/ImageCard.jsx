import React from "react";
import ImageHeading from "./ImageHeading";
import LikeCommentIcons from "./LikeCommentIcons";
import Luffy from "../../images/photos/luffy.jpg"

function ImageCard(){
    return(
        <div className="imageCard">
            <ImageHeading />
            <img src={Luffy} className="imageOnCard"/>
            <LikeCommentIcons />
        </div>
    )
}
export default ImageCard;   