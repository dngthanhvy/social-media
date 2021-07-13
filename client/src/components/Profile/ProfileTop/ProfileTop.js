import { useState, useEffect } from 'react';
import {Add, Check} from '@material-ui/icons';

import './ProfileTop.css';
import { fetchUser, followUser, unfollowUser } from '../../../api';

export default function ProfileTop({ id, userId }) {

    const [user, setUser] = useState();
    const [isFriend, setFriend] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchUserInfos = async() => {
        const res = await fetchUser(id);
        setUser(res.data);
    }

    const handleFollow = async() => {
        const res = (await followUser(id, userId)).data;
        fetchUserInfos();
    }

    const handleUnfollow = async() => {
        const res = (await unfollowUser(id, userId)).data;
        fetchUserInfos();
    }
    
    useEffect(() => {

        fetchUserInfos();

    }, [])

    useEffect(() => {

        setFriend(user?.friends?.includes(userId) ? true : false);

    }, [isFriend, user])


    return (
        <div className="profileTop">
            <div className="profileTop__container">
                <img src={user?.coverPicture} alt="background" className="profileTop__userBackgroundImg"/>
                <img src={user?.profilePicture} alt="profile" className="profileTop__userProfileImg"/>
                <span className="profileTop__username">{user?.username}</span>
                <div className="profileTop__addRemove">
                    {!loading && (!isFriend ? <button className={`profileTop__follow`} onClick={handleFollow}> <Add /> Add </button> : <button className={`profileTop__follow disabled`} onClick={handleUnfollow}> <Check /> Friends </button>)}
                </div>
            </div>
        </div>
    )
}

