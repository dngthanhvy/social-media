import {useState, useEffect} from 'react';

import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

import {fetchUser} from '../../../api';

import './Contact.css';

export default function Contact({ id }) {

    const [user, setUser] = useState({});

    const fetchUserInfos = async(userId) => {
        const res = (await fetchUser(userId)).data;
        setUser(res);
    }

    useEffect(() => {
        fetchUserInfos(id);
    }, [])

    return (
        <Link to={`/profile/${id}`} className="contact__link">
            <div className="contact">
                <Avatar src={user.profilePicture}/>
                <span className={`contact__name user${id}`}>{user.username}</span>
            </div>
        </Link>

    )
}
