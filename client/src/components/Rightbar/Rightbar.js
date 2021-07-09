import { Search, Add, MoreHoriz } from '@material-ui/icons'

import './Rightbar.css';
import { Users } from '../../data';
import Contact from './Contact/Contact';

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbar__wrapper">

                <div className="rightbar__top">
                    <span className="rightbar__title">Contacts</span>
                    <div className="rightbar__icons">
                        <Search className="rightbar__icon"/>
                        <Add className="rightbar__icon"/>
                        <MoreHoriz className="rightbar__icon"/>
                    </div>
                </div>

                <div className="rightbar__content">
                    {Users.map(user => <Contact img={user.profilePicture} id={user.id} username={user.username}/>)}
                </div>

            </div>
        </div>
    )
}
