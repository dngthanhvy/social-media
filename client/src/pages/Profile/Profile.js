import './Profile.css';
import { useParams } from 'react-router-dom';

import ProfileTop from '../../components/Profile/ProfileTop/ProfileTop';

export default function Profile() {
    const {id} = useParams();
    return (
        <div className="profile">
            <ProfileTop id={id} />
        </div>
    )
}
