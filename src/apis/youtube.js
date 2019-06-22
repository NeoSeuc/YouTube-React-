import axios from 'axios';

const KEY = "AIzaSyDfCqLNSgCM1nib8dZq3RUyCHB32uMVPog";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});