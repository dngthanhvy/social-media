import { Avatar } from '@material-ui/core';

import './Contact.css';

export default function Contact() {
    return (
        <div className="contact">
            <Avatar />
            <span className="contact__name">John Smith</span>
        </div>
    )
}
