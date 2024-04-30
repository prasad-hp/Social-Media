import React from "react";

function ImageHeading(props){
    return(
        <div className="flex items-center justify-start w-full p-2">  
            <img src={`../../images/profile-photos/${props.userPost.userName}.jpg`} className="rounded-full w-12"/>
            <h3 className="font-semibold ml-3">{props.userPost.name}</h3>
        </div>
    )
}

export default ImageHeading;    