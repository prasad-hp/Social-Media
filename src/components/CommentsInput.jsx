import React, { useState } from "react";

function CommentsInput(props) {
    const [newComment, setNewComment] = useState("");

    function storeComment(event) {
        setNewComment(event.target.value);
        console.log(props)
    }
    return(
        <div className="commentsInput">
            <textarea value={newComment} onChange={storeComment} />
            <button onClick={()=>props.toSaveComment(newComment)}>Post</button>
        </div>
    )
}

export default CommentsInput;
