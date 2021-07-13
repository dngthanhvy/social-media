import {useState, useEffect} from 'react';
import { fetchTimeline } from '../../api';

import './Posts.js';

import Post from './Post/Post';
import { Posts as UserPosts } from '../../data';

export default function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const fetchUserTimeline = async(userId) => {

            const res = await fetchTimeline(userId);
            setPosts(res.data);
        }

        fetchUserTimeline('60ec4397c88c0b4c6cf46ea5');

    }, [])

    return (
        <div className="posts">
            {posts.map(post => <Post key={post._id} id={post._id} desc={post.desc} photo={post.image} date={post.createdAt} userId={post.author} like={post.likes} comment={post.comments}/>)}
        </div>
    )
}
