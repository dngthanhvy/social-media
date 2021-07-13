import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:4001/'
});

export const fetchUser = (userId) => API.get(`/users/${userId}`);
export const updateUser = (userId, currentUserId, updatedInfos) => API.put(`/users/${userId}`, {id: currentUserId, ...updatedInfos});
export const deleteUser = (userId, currentUserId) => API.delete(`/users/${userId}`, {id: currentUserId});
export const followUser = (userId, currentUserId) => API.put(`/users/${userId}/follow`, {id: currentUserId});
export const unfollowUser = (userId, currentUserId) => API.put(`/users/${userId}/unfollow`, {id: currentUserId});

export const login = (formData) => API.post('/auth/login', formData);
export const register = (formData) => API.post('/auth/register', formData);

export const fetchPost = (postId) => API.get(`/posts/${postId}`);
export const updatePost = (postId, currentUserId, updatedInfos) => API.put(`/posts/${postId}`, {author: currentUserId, ...updatedInfos});
export const deletePost = (postId, currentUserId) => API.delete(`/posts/${postId}`, {author: currentUserId});
export const createPost = (currentUserId, postContent) => API.post(`/posts`, {author: currentUserId, ...postContent});
export const likePost = (postId, currentUserId) => API.post(`/posts/${postId}/like`, {author: currentUserId});
export const fetchTimeline = (userId) => API.get(`/posts/timeline/${userId}`);