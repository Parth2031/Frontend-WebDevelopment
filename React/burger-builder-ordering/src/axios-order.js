import axios from 'axios';

const instance = axios.create({ baseURL: 'https://react-burger-e91a6.firebaseio.com/' });

export default instance;