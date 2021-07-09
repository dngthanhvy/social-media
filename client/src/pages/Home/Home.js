import { Switch, Route } from 'react-router-dom';

import './Home.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';

export default function Home() {
    return (
        <div className="home">
            <Sidebar />
            <Feed />
            <Rightbar />
        </div>
    )
}
