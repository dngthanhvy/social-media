import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './Topbar.css';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar__left">
                <Link style={{textDecoration: 'none'}} to="/">
                    <span className="topbar__title">SocialMedia</span>
                </Link>
            </div>

            <div className="topbar__center">
                <div className="topbar__searchBar">
                    <input type="text" className="topbar__searchBarInput" placeholder="Search for friends, post or videos..." />
                    <Search className="topbar__searchBarIcon"/>
                </div>
            </div>

            <div className="topbar__right">
                <div className="topbar__links">
                    <span className="topbar__link">Homepage</span>
                    <span className="topbar__link">Timeline</span>
                </div>
                
                <div className="topbar__icons">

                    <div className="topbar__iconItem">
                        <Person />
                    </div>

                    <div className="topbar__iconItem">
                        <Chat />
                    </div>

                    <div className="topbar__iconItem">
                        <Notifications />
                    </div>

                    <Avatar className="topbar__avatar" />
                </div>

            </div>

        </div>
    )
}
