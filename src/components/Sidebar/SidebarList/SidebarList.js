import { RssFeed, Bookmark, VideoLibraryOutlined, Group, ChatBubbleOutlineOutlined, HelpOutline, WorkOutline, Event, School } from '@material-ui/icons';

import './SidebarList.css';
import SidebarListItem from './SidebarListItem/SidebarListItem';

export default function SidebarList() {
    return (
        <ul className="sidebarList">

            <SidebarListItem ListIcon={RssFeed} name="Feed" />
            <SidebarListItem ListIcon={ChatBubbleOutlineOutlined} name="Friends" />
            <SidebarListItem ListIcon={VideoLibraryOutlined} name="Videos" />
            <SidebarListItem ListIcon={Group} name="Groups" />
            <SidebarListItem ListIcon={Bookmark} name="Bookmarks" />
            <SidebarListItem ListIcon={HelpOutline} name="Questions" />
            <SidebarListItem ListIcon={WorkOutline} name="Jobs" />
            <SidebarListItem ListIcon={Event} name="Events" />
            <SidebarListItem ListIcon={School} name="Courses" />
        </ul>
    )
}
