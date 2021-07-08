import { Avatar } from '@material-ui/core';
import { ThumbUp, ChatBubbleOutline } from '@material-ui/icons';
import './Post.css';

export default function Post({userAvatar, username, date}) {
    return (
        <div className="post">
            <div className="post__wrapper">

                <div className="post__top">
                    
                    <Avatar className="post__userAvatar"/>
                    <div className="post__info">
                        <span className="post__userName">Safak Kocaoglu</span>
                        <span className="post__time">5 mins ago</span>
                    </div>
                </div>

                <div className="post__content">
                    <span className="post__text">Hello! It's my first post :)</span>
                    <img className="post__img" alt="" src="https://www.jrpass-suisse.ch/wp-content/uploads/2019/02/train_tokyo.jpg"/>
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
