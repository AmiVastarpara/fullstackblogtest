import {FETCH_AUTHORS_ACTION,FETCH_AUTHOR_BY_ID_ACTION,fetchAuthors,fetchAuthorById} from '../actions/author'
const initialSate = {
    authors:[],
    authorError:"",
}
const PostReducer = async (state = initialSate, action) => {
    switch (action.type) {
        case FETCH_AUTHORS_ACTION:
            const newSate = await fetchAuthors(action.payload, state);
            return newSate;
        case FETCH_AUTHOR_BY_ID_ACTION:
            return fetchAuthorById(action.payload, state);
        default:
            return state;
    }
}

export default PostReducer;