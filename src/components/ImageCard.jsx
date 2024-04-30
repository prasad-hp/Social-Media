import React from "react";
import ImageHeading from "./ImageHeading";
import LikeCommentIcons from "./LikeCommentIcons";

function ImageCard(props){
    return(
        <div className="flex flex-col items-center lg:w-full bg-gray-100 m-4 rounded-md">
                <ImageHeading
                    userPost={props.userPost}
                />
            <img src={`../../images/photos/${props.userPost.photo}.jpg`} className="w-11/12 justify-around rounded-sm"/>
            <LikeCommentIcons 
                userPost={props.userPost}
            />
        </div>
    )
}
export default ImageCard;