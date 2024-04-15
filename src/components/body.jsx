import React from "react";
import ImageCard from "./ImageCard";
import userPosts from "../data";


function Body(){
    const imagePosts = userPosts.map((userPost)=>{
        return(
            <ImageCard 
            key={userPost.id}
            userPost={userPost}/>
        )
    })

    return (
        <div className="body">
            {imagePosts}
        </div>
    )
}

export default Body;