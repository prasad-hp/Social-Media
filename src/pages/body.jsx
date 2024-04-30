import React from "react";
import ImageCard from "../components/ImageCard";
import userPosts from "../data";


function Body(){

    const imagePosts = userPosts.map((userPost)=>{
        return(
            <div className="flex w-screen">
                <div className="justify-center w-1/2 flex">
                    <ImageCard 
                    key={userPost.id}
                    userPost={userPost}/>
                </div>
            </div>
        )
    })

    return (
        <div className="body">
            {imagePosts}
        </div>
    )
}

export default Body;