import { Avatar } from '@material-ui/core';
import { ThumbUp, ChatBubbleOutline } from '@material-ui/icons';
import './Post.css';

import { Users } from '../../../data';

export default function Post({id, desc, photo, date, userId, like, comment}) {
    
    const user = Users.find(user => user.id === userId);
    
    return (
        <div className="post">
            <div className="post__wrapper">

                <div className="post__top">
                    
                    <Avatar className="post__userAvatar" src={user.profilePicture}/>
                    <div className="post__info">
                        <span className="post__userName">{user.username}</span>
                        <span className="post__time">{date}</span>
                    </div>
                </div>

                <div className="post__content">
                    {desc && <span className="post__text">{desc}</span>}
                    <img className="post__img" alt="" src={photo}/>
                </div>

                <div className="post__numberLikesComments">
                    <span className="post__numbersLikes">{`${like} ${like>1 ? "people" : "person"} liked this`}</span>
                    <span className="post__numberComments">{`${comment} ${comment>1 ? "comments" : "comment"}`}</span>
                </div>

                <div className="post__buttons">
                    <div className="post__buttonsItem">
                        <ThumbUp className="post__icon" />
                        <span className="post__buttonsText">Like</span>
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
