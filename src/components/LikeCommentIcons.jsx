import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CommentsList from "./CommentsList";


function LikeCommentIcons (){
    const [like, setLike] = useState(false);
    const [likeCount, setLikeCount] = useState(10);
    const [showComments, setShowComments] = useState(false);
    // const [storeComment, setStoreComment] = useState([]);

    function likeButtonClick(){
        setLike(!like)
        like ? setLikeCount(likeCount-1) : setLikeCount(likeCount+1)
    }
    function commentButtonClick(){
        setShowComments(!showComments)
    }

    // function saveComment(newComment) {
    //     setStoreComment([...comments, newComment ])
    // }
    
    return(
        <div>
            <button onClick={likeButtonClick}> { like ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon /> } {likeCount}</button>
            <button onClick={commentButtonClick}> <ChatBubbleOutlineIcon /></button>
            {showComments && <CommentsList /> }
        </div>
    )
}

export default LikeCommentIcons;