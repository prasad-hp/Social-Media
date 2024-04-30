import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CommentsList from "./CommentsList";

function LikeCommentIcons (props){
    const [like, setLike] = useState(false);
    const [likeCount, setLikeCount] = useState(props.userPost.likes);
    const [showComments, setShowComments] = useState(false);

    function likeButtonClick(){
        setLike(!like)
        like ? setLikeCount(likeCount-1) : setLikeCount(likeCount+1)
    }
    function commentButtonClick(){
        setShowComments(!showComments)
    }

    return(
        <div className="align-top w-full px-4">
            <div className="flex justify-start ">
                <button onClick={likeButtonClick} className="pr-5"> { like ? <FavoriteOutlinedIcon className="h-10"/> : <FavoriteBorderOutlinedIcon /> } {likeCount}</button>
                <button onClick={commentButtonClick}> <ChatBubbleOutlineIcon /></button>
            </div>
                <div>
                    {showComments && <CommentsList userPost={props.userPost}/> }
                </div>
        </div>
    )
}

export default LikeCommentIcons;