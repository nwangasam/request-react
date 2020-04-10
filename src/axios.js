import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

instance.interceptors.request.use(req => {
    console.log(req, 'From Axios Instances');
    return req
}, err => {
    console.log(err, 'From Axios Instances');
    return Promise.reject(err);
})

export default instance;