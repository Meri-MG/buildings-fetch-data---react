import axios from 'axios';


const KEY = 'AIzaSyCISXiVjZX81WtqbwlsECFv8q522a_zjx0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
