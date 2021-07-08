import './Sidebar.css';
import SidebarList from './SidebarList/SidebarList';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__wrapper">
                <SidebarList />
            </div>
        </div>
    )
}
