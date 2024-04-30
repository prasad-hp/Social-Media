import React from "react";
import ImageCard from "../components/ImageCard";
import userPosts from "../data";


function Body(){

    const imagePosts = userPosts.map((userPost)=>{
        return(
                <div>
                    <ImageCard 
                    key={userPost.id}
                    userPost={userPost}/>
                </div>

        )
    })

    return (
        <div className="flex w-screen justify-center">
            <div className="lg:w-1/4 flex flex-col justify-center">
                {imagePosts}
            </div>
        </div>
    )
}

export default Body;