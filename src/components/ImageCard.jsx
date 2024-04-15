import React from "react";
import ImageHeading from "./ImageHeading";
import LikeCommentIcons from "./LikeCommentIcons";

function ImageCard(props){
    return(
        <div className="imageCard">
            <ImageHeading 
                userPost={props.userPost}
            />
            <img src={`../../images/${props.userPost.userName}/photos/${props.userPost.photo}.jpg`} className="imageOnCard"/>
            <LikeCommentIcons 
                userPost={props.userPost}
            />
        </div>
    )
}
export default ImageCard;