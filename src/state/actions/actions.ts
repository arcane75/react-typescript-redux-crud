import httpReq from '../../services/http.service';
import { ActionType } from '../actionType/actionType';

const getPosts = (posts: any) => ({
    type: ActionType.GET,
    payload: posts,

});

const deletePostById = (id: number) => ({
    type: ActionType.DELETE,
    payload:  id ,
})

const addedPost = () => ({
    type: ActionType.POST,
    payload: null,
})
const updatePostById = (id: number) => ({
    type: ActionType.UPDATE,
    payload: id,
})

const getPostById = (post: any) => ({
    type: ActionType.UPDATE,
    payload:  post ,
})

export const loadPosts = () => {
    return function (dispatch: any) {
        httpReq.get('/postdata').then((res) => {
            // console.log('/posts', res);
            dispatch(getPosts(res));
        }).catch(err => console.log(err));
    }
}

export const DeletePost = (id: number) => {
    return function (dispatch: any) {
        httpReq.delete(`/postdata/${id}`).then((res) => {
            // console.log(`/posts/${id}`, res);
            dispatch(deletePostById(id));
            dispatch(loadPosts());
        }).catch(err => console.log(err));
    }
}

export const AddPost = (post: any) => {
    return function (dispatch: any) {
        httpReq.post('/postdata', post).then((res) => {
            // console.log('added post', res);
            dispatch(addedPost());
            dispatch(loadPosts());
        }).catch(err => console.log(err));
    }
}

export const GetPostId = (id:number) => {
    return function (dispatch: any) {
        httpReq.get(`/postdata/${id}`).then((res) => {
            //   console.log('Update post', res);
            dispatch(getPostById(res));
            dispatch(loadPosts());
        }).catch(err => console.log(err));
    }
}

export const UpdatePost = (post: any, id:number) => {
    return function (dispatch: any) {
        httpReq.put(`/postdata/${id}`, post).then((res) => {
              console.log('Update post', res);
            dispatch(updatePostById(id));
        }).catch(err => console.log(err));
    }
}


type x = ReturnType<typeof getPosts>;
type y = ReturnType<typeof deletePostById>;
type z = ReturnType<typeof addedPost>;
type w = ReturnType<typeof getPostById>;
type p = ReturnType<typeof updatePostById>;

export type Action = x | y | z | w | p;