import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-dd9cb.firebaseio.com/'
});

export default instance;