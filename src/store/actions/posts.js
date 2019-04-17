import { SET_POSTS, ADD_COMMENT, CREATING_POST, POST_CREATED } from './actionTypes'
import axios from 'axios'

export const addPost = post => {
    return dispatch => {
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
            axios.post('/posts.json', { ...post })
            .then(res => {
                dispatch(fetchPosts())
                dispatch(postCreated())
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }
}

export const addComment = payload => {
    return {
        type: ADD_COMMENT,
        payload
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