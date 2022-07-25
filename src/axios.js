import axios from 'axios';

const instance = axios.create({

  baseURL: 'https://us-central1-kalab-d8e1b.cloudfunctions.net/api',
 
});

export default instance;
