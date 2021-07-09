import { Link } from 'react-router-dom';
import './SidebarListItem.css';

export default function SidebarListItem({ListIcon, name, link}) {
    return (
        <Link to={link} className="sidebarListItem__link">
            <li className="sidebarListItem">
                <ListIcon className="sidebarListItem__icon"/>
                {name}
            </li>
        </Link>
    )
}
