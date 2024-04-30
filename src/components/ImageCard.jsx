import React from "react";
import ImageHeading from "./ImageHeading";
import LikeCommentIcons from "./LikeCommentIcons";

function ImageCard(props){
    return(
        <div className="flex flex-col justify-center lg:w-1/3">
            <div className="justify-center items-center">    
                <ImageHeading
                    userPost={props.userPost}
                />
            </div>
            <img src={`../../images/photos/${props.userPost.photo}.jpg`} className="w-10/12 justify-center"/>
            <LikeCommentIcons 
                userPost={props.userPost}
            />
        </div>
    )
}
export default ImageCard;