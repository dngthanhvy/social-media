import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './Contact.css';

export default function Contact({ img, id, username }) {
    return (
        <Link to={`/profile/${id}`} className="contact__link">
            <div className="contact">
                <Avatar src={img}/>
                <span className={`contact__name user${id}`}>{username}</span>
            </div>
        </Link>

    )
}
