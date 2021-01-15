import axios from 'axios';
export const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmI1MGM5YmIyYzE4YzcyZjgzMDRjOTA1ZTc1OTM5NSIsInN1YiI6IjVmZmVlNzljMGZmMTVhMDAzZjVhZmE4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uLDQQBUzVYm_X1Iq7S2z-cYFuJPQpuAkd9of4TvYaQg'
    }
})

