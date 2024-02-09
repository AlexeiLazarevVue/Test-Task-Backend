import axios from "axios";
import config from "./config";

export const baseApi = (base_domain, token) => {
    return axios.create({
        baseURL: config.baseURL(base_domain) + '/api/v4/',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
}
export const genesisApi = axios.create({
    baseURL: config.genesis,
    headers: {
        'X-client-id': config.x_client_id,
        'Content-Type': 'application/json'

    }
})