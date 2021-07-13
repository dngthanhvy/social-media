import './Profile.css';
import { useParams } from 'react-router-dom';

import ProfileTop from '../../components/Profile/ProfileTop/ProfileTop';

export default function Profile() {
    const {id} = useParams();
    return (
        <div className="profile">
            <ProfileTop id={id} userId={'60ec4397c88c0b4c6cf46ea5'}/>
        </div>
    )
}
