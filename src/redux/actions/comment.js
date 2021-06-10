import axios from "axios";
import {APP_API_URL} from "../../utils/constant";

export const addComment = async (paylod) => {
    try {
        const result = await axios.post(`${APP_API_URL}/comments`,paylod);
        return result.data;
    } catch (e) {
        throw e;
    }
}

export const getPostComment = async (postId) => {
    try {
        const result = await axios.get(`${APP_API_URL}/posts/${postId}/comments`);
        return result.data;
    } catch (e) {
        throw e;
    }
}