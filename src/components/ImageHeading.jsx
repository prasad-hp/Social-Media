import React from "react";
import ProfilePhoto from "../../images/profile-photos/prasadhp.jpeg"

function ImageHeading(){
    return(
        <div className="imageHeading">  
            <img src={ProfilePhoto} className="profilePhotoOnCard"/>
            <h3 className="nameOnCard">Prasad Hp</h3>
        </div>
    )
}

export default ImageHeading;