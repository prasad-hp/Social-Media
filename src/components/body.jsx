import React from "react";
import ImageCard from "./ImageCard";
import userData from "../data";


function Body(){

    return (
        <div className="body">
            <ImageCard />
            {userData.map((post)=>{
                <ImageCard 
                   name={userData[0].name}
                   userName={userData[0].userName}

                />
            })}
        </div>
    )
}

export default Body;