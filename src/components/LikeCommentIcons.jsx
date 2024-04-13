import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Comments from "./Comments";


function LikeCommentIcons (){
    const [like, setLike] = useState(false)
    const [likeCount, setLikeCount] = useState(10)
    const [showComments, setShowComments] = useState(false)

    function likeButtonClick(){
        setLike(!like)
        like ? setLikeCount(likeCount-1) : setLikeCount(likeCount+1)
    }
    function commentButtonClick(){
        setShowComments(!showComments)
    }
    
    return(
        <div>
            <button onClick={likeButtonClick}> { like ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon /> } {likeCount}</button>
            <button onClick={commentButtonClick}> <ChatBubbleOutlineIcon /></button>
            {showComments && <Comments /> }
        </div>
    )
}

export default LikeCommentIcons;