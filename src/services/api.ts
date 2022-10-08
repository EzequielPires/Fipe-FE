import axios from "axios";
import { parseCookies } from "nookies";

const useApi = (ctx?: any) => {
    const { 'mobilar.token': token } = parseCookies(ctx);
    const api = axios.create({
        baseURL: 'http://localhost:3000/'
    })
    if (token) api.defaults.headers['Authorization'] = `Bearer ${token}`;
    return api;
}

export const api = useApi();