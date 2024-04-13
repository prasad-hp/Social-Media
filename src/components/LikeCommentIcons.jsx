import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';


function LikeCommentIcons (){
    const [like, setLike] = useState(false)
    const [likeCount, setLikeCount] = useState(10)

    function likeButtonClick(){
        setLike(!like)
        like ? setLikeCount(likeCount-1) : setLikeCount(likeCount+1)
    }
    function commentButtonClick(){
    }
    
    return(
        <div>
            <button onClick={likeButtonClick}> { like ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon /> } {likeCount}</button>
            <button onClick={commentButtonClick}> <ChatBubbleOutlineIcon /></button>

        </div>
    )
}

export default LikeCommentIcons;