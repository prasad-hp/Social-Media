import React from "react";

function ImageHeading(props){
    return(
        <div className="flex">  
            <img src={`../../images/profile-photos/${props.userPost.userName}.jpg`} className="justify-center rounded-full w-12"/>
            <h3 className="">{props.userPost.name}</h3>
        </div>
    )
}

export default ImageHeading;    