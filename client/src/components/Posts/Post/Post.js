import { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import { ThumbUp, ChatBubbleOutline, MoreHoriz } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { fetchUser, likePost, fetchPost } from '../../../api';

import './Post.css';

export default function Post({id, desc, photo, date, userId, like=[], comment=[]}) {

    const [likes, setLikes] = useState(like);
    const [comments, setComments] = useState(comment);
    const [isLiked, setLiked] = useState(false); // is liked by the current user (userid)
    const [user, setUser] = useState({});

    const handleLike = async(e) => {

        await likePost(id, userId);

        const post = (await fetchPostInfos(id));
        setLikes(post.likes);
    }

    const fetchPostInfos = async(id) => {
        const res = await fetchPost(id);
        return res.data;
    }

    const fetchUserInfos = async() => {
        const res = await fetchUser(userId);
        setUser(res.data);
    }
    
    useEffect(() => {

        fetchUserInfos();

    }, [])

    useEffect(() => {

        if (likes.includes(userId)) {
            setLiked(true);
        } else {
            setLiked(false);
        }

    }, [likes])
    
    return (
        <div className="post">
            <div className="post__wrapper">

                <div className="post__top">
                    
                    <div className="post__topUserInfos">
                        <Avatar className="post__userAvatar" src={user.profilePicture}/>
                        <div className="post__info">
                            <Link to={`/profile/${user._id}`} className="post__userLink">
                                <span className="post__userName">{user.username}</span>
                            </Link>
                            <span className="post__time">{date}</span>
                        </div>
                    </div>


                    <div className="post__modif">
                        <MoreHoriz className="post__topEdit"/>
                    </div>
                </div>

                <div className="post__content">
                    {desc && <span className="post__text">{desc}</span>}
                    <img className="post__img" alt="" src={photo}/>
                </div>

                <div className="post__likesComments">
                    <span className="post__numbersLikes">
                        <img className="post__numbersLikeIcon" src="/assets/like.png" alt="like"/> 
                        { likes.length > 0 ? `${likes.length} ${likes.length>1 ? "people" : "person"} liked this` : 'Be the first person to like this post'}
                    </span>
                    <span className="post__numberComments">{`${comments.length} ${comment.length>1 ? "comments" : "comment"}`}</span>
                </div>

                <div className="post__buttons">
                    <div className='post__buttonsItem' onClick={handleLike}>
                        <ThumbUp className={`post__icon${isLiked ? ' liked' : ''}`} />
                        <span className={`post__buttonsText${isLiked ? ' liked' : ''}`}>{isLiked ? 'You liked this' : 'Like'}</span>
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
