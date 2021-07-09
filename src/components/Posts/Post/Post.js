import { useState } from 'react';
import { Avatar } from '@material-ui/core';
import { ThumbUp, ChatBubbleOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import './Post.css';

import { Users } from '../../../data';

export default function Post({id, desc, photo, date, userId, like, comment}) {

    const [likes, setLikes] = useState(like);
    const [isLiked, setLiked] = useState(false);

    const handleLike = (e) => {
        if (isLiked) {
            setLikes(lastLikes => lastLikes - 1);
            setLiked(false);
        }
        else {
            setLiked(true);
            setLikes(lastLikes => lastLikes+1);
        }
    }
    
    const user = Users.find(user => user.id === userId);
    
    return (
        <div className="post">
            <div className="post__wrapper">

                <div className="post__top">
                    
                    <Avatar className="post__userAvatar" src={user.profilePicture}/>
                    <div className="post__info">
                        <Link to={`/profile/${user.id}`} className="post__userLink">
                            <span className="post__userName">{user.username}</span>
                        </Link>
                        <span className="post__time">{date}</span>
                    </div>
                </div>

                <div className="post__content">
                    {desc && <span className="post__text">{desc}</span>}
                    <img className="post__img" alt="" src={photo}/>
                </div>

                <div className="post__numberLikesComments">
                    <span className="post__numbersLikes">
                        <img className="post__numbersLikeIcon" src="/assets/like.png" alt="like"/>
                        {`${likes} ${likes>1 ? "people" : "person"} liked this`}
                    </span>
                    <span className="post__numberComments">{`${comment} ${comment>1 ? "comments" : "comment"}`}</span>
                </div>

                <div className="post__buttons">
                    <div className='post__buttonsItem' onClick={handleLike}>
                        <ThumbUp className={`post__icon${isLiked ? ' liked' : ''}`} />
                        <span className={`post__buttonsText${isLiked ? ' liked' : ''}`}>Like</span>
                    </div>
                    <div className="post__buttonsItem">
                        <ChatBubbleOutline className="post__icon" />
                        <span className="post__buttonsText">Comment</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
