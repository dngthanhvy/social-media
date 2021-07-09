import './Posts.js';

import Post from './Post/Post';
import { Posts as UserPosts } from '../../data';

export default function Posts() {
    return (
        <div className="posts">
            {UserPosts.map(post => <Post id={post.id} desc={post.desc} photo={post.photo} date={post.date} userId={post.userId} like={post.like} comment={post.comment}/>)}
        </div>
    )
}
