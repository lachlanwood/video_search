import axios from 'axios';

const KEY = 'AIzaSyASdGYvJEWJShfq0U7m1czr0UPJNUdjRcQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
