import axios from 'axios';
import {APP_API_URL} from "../../utils/constant";

export const FETCH_AUTHORS_ACTION = "FETCH_AUTHORS_ACTION";
export const FETCH_AUTHOR_BY_ID_ACTION = "FETCH_AUTHOR_BY_ID_ACTION";


export const fetchAuthors = async (payload) => {
    const {start = 0, end = 10, limit = 10} = payload;
    try {
        const result = await axios.get(`${APP_API_URL}/profiles?_start=${start}&_end=${end}&_limit=${limit}`);
        return result.data;
    }catch (e) {
        throw e;
    }
}

export const fetchAuthorById = async (id) => {
    try {
        const result = await axios.get(`${APP_API_URL}/profiles/${id}?_embed=posts`);
        return result.data;
    } catch (e) {
        throw e;
    }
}

export const addAuthor = async (payload) => {
    try {
        const result = await axios.post(`${APP_API_URL}/profiles`,payload);
        return result.data;
    } catch (e) {
        throw e;
    }
}