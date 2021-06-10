import axios from "axios";
import {APP_API_URL} from "../../utils/constant";

export const addLikes = async (paylod) => {
    try {
        const result = await axios.post(`${APP_API_URL}/likes`,paylod);
        return result.data;
    } catch (e) {
        throw e;
    }
}