import React, { useState } from "react";
import CommentsInput from "./CommentsInput";

function Comments(){
    const [comment, setComment] = useState([]);

    function saveComment(newComment){
        setComment(prevComment => {
            return [...prevComment, newComment];
        });
    }
    return (
        <div>
            <CommentsInput toSaveComment={saveComment} />
            {comment.map((comment, index) => (
                <ul key={index}>
                    <li>{comment}</li>
                </ul>
            ))}
        </div>
    );
}

export default Comments;
