import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'c6a9e8051cbc7a55c552f4bfa4af16cd',
        language: 'es-ES'
    }
});

export default movieDB;