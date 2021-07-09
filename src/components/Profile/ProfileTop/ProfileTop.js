import './ProfileTop.css';
import {Users} from '../../../data';

export default function ProfileTop({ id, username, backgroundPicture, profilePicture }) {

    const user = Users.find(elem => elem.id == id);

    return (
        <div className="profileTop">
            <div className="profileTop__container">
                <img src={`../../${user.backgroundPicture}`} alt="background" className="profileTop__userBackgroundImg"/>
                <img src={`../../${user.profilePicture}`} alt="profile" className="profileTop__userProfileImg"/>
                <span className="profileTop__username">{user.username}</span>
            </div>
        </div>
    )
}

