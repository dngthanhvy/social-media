import { Avatar } from '@material-ui/core';
import { VideoCall, PhotoLibrary, EmojiEmotionsOutlined } from '@material-ui/icons';

import './Share.css';

export default function Share() {
    return (
        <div className="share">
            <div className="share__wrapper">

                <div className="share__top">
                    <Avatar className="share__avatar"/>
                    <input type="text" className="share__input" placeholder="What's on your mind?"/>
                </div>

                <div className="share__bottom">
                    <div className="share__item">
                        <VideoCall style={{color: '#E42645'}}/>
                        <span className="share__itemText">Live video</span>
                    </div>
                    <div className="share__item">
                        <PhotoLibrary style={{color: '#41B35D'}}/>
                        <span className="share__itemText">Photo/Video</span>
                    </div>
                    <div className="share__item">
                        <EmojiEmotionsOutlined style={{color: '#EAB026'}}/>
                        <span className="share__itemText">Mood</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
