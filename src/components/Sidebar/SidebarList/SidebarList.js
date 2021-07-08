import { RssFeed, Bookmark, VideoLibraryOutlined, Group, ChatBubbleOutlineOutlined, HelpOutline, WorkOutline, Event, School } from '@material-ui/icons';

import './SidebarList.css';
import SidebarListItem from './SidebarListItem/SidebarListItem';

export default function SidebarList() {
    return (
        <ul className="sidebarList">
            <SidebarListItem ListIcon={RssFeed} name="Feed" link="/feed"/>
            <SidebarListItem ListIcon={ChatBubbleOutlineOutlined} name="Friends" link="/friends"/>
            <SidebarListItem ListIcon={VideoLibraryOutlined} name="Videos" link="/videos"/>
            <SidebarListItem ListIcon={Group} name="Groups" link="/groups"/>
            <SidebarListItem ListIcon={Bookmark} name="Bookmarks" link="/bookmarks"/>
            <SidebarListItem ListIcon={HelpOutline} name="Questions" link="/questions"/>
            <SidebarListItem ListIcon={WorkOutline} name="Jobs" link="/jobs"/>
            <SidebarListItem ListIcon={Event} name="Events" link="/events"/>
            <SidebarListItem ListIcon={School} name="Courses" link="/courses"/>
        </ul>
    )
}
