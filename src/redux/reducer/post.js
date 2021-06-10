import {FETCH_POST_ACTION, fetchPost} from '../actions/post'
const initialSate = {
    posts:[]
}
const PostReducer = (state=initialSate,action)=>{
    switch (action.type) {
        case FETCH_POST_ACTION:
            fetchPost(action.payload,state);
            return state;
        default:
            return state;
    }
}

export default PostReducer;