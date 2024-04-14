import React, { useState } from "react";
import CommentsInput from "./CommentsInput";

function CommentsList(){
    const [comments, setComments] = useState(["Monkey D'luffy"]);

    function saveComment(newComment){
        if(newComment===""){
            return;
        }else{
            setComments(prevComment => {
                return [...prevComment, newComment];
            });
            console.log(comments)
        }
    }
    return (
        <div className="commentsList">
            <CommentsInput toSaveComment={saveComment} />
            <div className="commentsListed">
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
