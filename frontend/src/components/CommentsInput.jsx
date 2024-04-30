import React, { useState } from "react";

function CommentsInput(props) {
    const [newComment, setNewComment] = useState("");

    function storeComment(event) {
        setNewComment(event.target.value);
        console.log(props)
    }
    return(
        <div className="w-full flex items-center justify-start">
            <textarea value={newComment} onChange={storeComment} className="w-3/4 rounded-md"/>
            <button onClick={()=>{props.toSaveComment(newComment)
                setNewComment("")}} className="w-1/8 border-2 rounded-md bg-red-500 h-1/2 ml-5">Post</button>
        </div>
    )
}

export default CommentsInput;
