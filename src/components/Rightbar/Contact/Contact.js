import { Avatar } from '@material-ui/core';

import './Contact.css';

export default function Contact({ img, id, username }) {
    return (
        <div className="contact">
            <Avatar src={img}/>
            <span className={`contact__name user${id}`}>{username}</span>
        </div>
    )
}
