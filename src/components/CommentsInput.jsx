import React, { useState } from "react";

function CommentsInput() {
    const [newComment, setNewComment] = useState("");

    function storeComment(event) {
        setNewComment(event.target.value);
    }
    function clearArea(){
        setNewComment("")
    }
    return (
        <div className="commentsInput">
            <textarea value={newComment} onChange={storeComment} />
            <button onClick={clearArea}>Post</button>
        </div>
    );
}

export default CommentsInput;
