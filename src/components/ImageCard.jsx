import React from "react";
import ImageHeading from "./ImageHeading";
import LikeCommentIcons from "./LikeCommentIcons";

function ImageCard(props){
    return(
        <div className="imageCard flex">
            <div className="justify-center">    
                <ImageHeading
                    userPost={props.userPost}
                />
            </div>
            <img src={`../../images/photos/${props.userPost.photo}.jpg`} className="imageOnCard"/>
            <LikeCommentIcons 
                userPost={props.userPost}
            />
        </div>
    )
}
export default ImageCard;