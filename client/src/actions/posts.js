import * as api from '../api'
import { CREATE, UPDATE, DELETE, FETCH_ALL, LIKE } from '../constants/actionTypes'

//ACTION CREATORS
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data })
    }
    catch (err) {

    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({ type: CREATE, payload: data })

    }
    catch (err) {
        console.log(err)
    }
}

export const updatePost = (id, post) => async (dispatch) => {

    try {
        const { data } = await api.updatePost(id, post)
        dispatch({ type: UPDATE, payload: data })
    }
    catch (e) {
        console.log(e)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)

        dispatch({ action: DELETE, payload: id })
    }
    catch (e) {
        console.log(e)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.updateLikeCount(id)
        dispatch({ type: LIKE, payload: data })

    }
    catch (e) {
        console.log(e)
    }
}