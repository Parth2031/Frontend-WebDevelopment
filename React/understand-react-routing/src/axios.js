// TODO:: Default SetUp for accessing Multiple API'S at a same time in which instance method is used.

import axios from 'axios';

const instance = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// ! Similarly, we can Setup the Interceptors for particular files as for Global Files ->
// instance.interceptors.request...

export default instance;