import axios from 'axios'

//axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.headers.post["Content-Type"] = 'application/json'
//axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

export const request = async (method, url, data, headers) => {
    return await axios({
        method,
        url,
        data,
        headers
    });
};