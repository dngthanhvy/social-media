import { useState, useEffect } from 'react';
import { Search, Add, MoreHoriz } from '@material-ui/icons'
import { fetchUser } from '../../api';

import './Rightbar.css';
import { Users } from '../../data';
import Contact from './Contact/Contact';

export default function Rightbar() {

    const [friends, setFriends] = useState([]);

    const fetchUserInfos = async(userId) => {
        const res = await fetchUser(userId);
        setFriends(res.data.friends);
    }

    useEffect(() => {

        fetchUserInfos('60ec4397c88c0b4c6cf46ea5');

    }, [])

    return (
        <div className="rightbar">
            <div className="rightbar__wrapper">

                <div className="rightbar__top">
                    <span className="rightbar__title">Contacts</span>
                    <div className="rightbar__icons">
                        <Search className="rightbar__icon"/>
                        <Add className="rightbar__icon"/>
                        <MoreHoriz className="rightbar__icon"/>
                    </div>
                </div>

                <div className="rightbar__content">
                    {friends.map(friendId => <Contact key={friendId} id={friendId} />)}
                </div>

            </div>
        </div>
    )
}
