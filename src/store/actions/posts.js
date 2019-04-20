import { SET_POSTS, ADD_COMMENT, CREATING_POST, POST_CREATED } from './actionTypes'
import { setMessage } from "./message";
import axios from 'axios'

export const addPost = post => {
    return (dispatch, getState) => {
        dispatch(creatingPost())
        axios({
            url: 'uploadImage',
            baseURL: 'https://us-central1-photor-252ad.cloudfunctions.net/',
            method: 'post',
            data: {
                image: post.image.base64
            }
        })
        .then(res => {
            post.image = res.data.imageURL
            axios.post(`/posts.json?auth=${getState().user.token}`, { ...post })
            .then(res => {
                dispatch(fetchPosts())
                dispatch(postCreated())
            })
            .catch(err => {
                    dispatch(setMessage({
                        title: 'ERROR!',
                        text: err
                    }))
                }
            )
        })
        .catch(err => console.log(err))
    }
}

export const addComment = payload => {
    return (dispatch, getState) => {
        axios.get(`/posts/${payload.postId}.json`)
        .then(res => {
            const comments = res.data.comments || []
            comments.push(payload.comment)
            axios.patch(`/posts/${payload.postId}.json?auth=${getState().user.token}`, { comments})
            .then(res => {
                dispatch(fetchPosts())
            })
            .catch(err => console.log(err))
        })
        .catch(err => conso.log(err))
    }
}

export const setPosts = posts => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

export const fetchPosts = () => {
    return dispatch => {
        axios.get('/posts.json')
        .then(res => {
            const posts = []
            for( let key in res.data){ posts.push({ ...res.data[key], id: key }) }
            dispatch(setPosts(posts.reverse()))
        })
        .catch(err => console.log(err))
    }
}

export const creatingPost = () => {
    return {
        type: CREATING_POST
    }
}

export const postCreated = () => {
    return {
        type: POST_CREATED
    }
}