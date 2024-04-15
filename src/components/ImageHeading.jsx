import React from "react";

function ImageHeading(props){
    return(
        <div className="imageHeading">  
            <img src={`../../images/${props.userPost.userName}/profile-photo/${props.userPost.userName}.jpg`} className="profilePhotoOnCard"/>
            <h3 className="nameOnCard">{props.userPost.name}</h3>
        </div>
    )
}

export default ImageHeading;