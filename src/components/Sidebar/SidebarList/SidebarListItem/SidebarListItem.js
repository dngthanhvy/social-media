import './SidebarListItem.css';

export default function SidebarListItem({ListIcon, name}) {
    return (
            <li className="sidebarListItem">
                <ListIcon className="sidebarListItem__icon"/>
                {name}
            </li>
    )
}
