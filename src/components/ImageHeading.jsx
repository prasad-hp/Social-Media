import React from "react";

function ImageHeading(props){
    return(
        <div className="imageHeading">  
            <img src={`../../images/profile-photos/${props.userPost.userName}.jpg`} className="profilePhotoOnCard"/>
            <h3 className="nameOnCard">{props.userPost.name}</h3>
        </div>
    )
}

export default ImageHeading;    