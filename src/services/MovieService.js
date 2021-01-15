import {AXIOS} from "./axiosSet";

class MoviesService {
    async getMovies(){
        const { data } = await AXIOS.get('/discover/movie')
        return data
    }
    async getMovieDetails(movie_id){
        const { data } = await AXIOS.get(`/movie/${movie_id}`)
        return data
    }
}

export const moviesService = new MoviesService();
