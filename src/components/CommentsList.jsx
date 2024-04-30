import React, { useState } from "react";
import CommentsInput from "./CommentsInput";

function CommentsList(props){
    const [comments, setComments] = useState(props.userPost.comments);

    function saveComment(newComment){
        if(newComment===""){
            return;
        }else{
            setComments(prevComment => {
                return [...prevComment, newComment];
            });
        }
    }
    return (
        <div className="w-full">
            <CommentsInput toSaveComment={saveComment} />
            <div className="w-full">
            {comments.map((comment, index) => (
                <ul key={index}>
                    <li>{comment}</li>
                </ul>
            ))}
            </div>
        </div>
    );
}

export default CommentsList;
