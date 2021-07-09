import './Feed.css';
import Share from '../Share/Share';
import Posts from '../Posts/Posts';

export default function Feed() {
    return (
        <div className="feed">
            <div className="feed__wrapper">
                <Share />
                <Posts />
            </div>
        </div>
    )
}
