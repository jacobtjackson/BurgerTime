import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgertime-c7c88.firebaseio.com'
});

export default instance;