import axios from 'axios';
import {APP_API_URL} from "../../utils/constant";

export const FETCH_POST_ACTION = "FETCH_POST";


export const fetchPost = (where, prevSate)=>{
    console.log("where",where);
    console.log("prevState",prevSate);
    axios
        .get(`${APP_API_URL}/posts`).then((data)=>{
            console.log(data);
    }).catch(error=>console.log(error))
}

export const fetchPostById = async (id) => {
    try {
        const result = await axios.get(`${APP_API_URL}/posts/${id}?_embed=comments&_embed=likes`);
        return result.data;
    } catch (e) {
        throw e;
    }
}

export const addPost = async (payload) => {
    try {
        const result = await axios.post(`${APP_API_URL}/posts/`,payload);
        return result.data;
    } catch (e) {
        throw e;
    }
}