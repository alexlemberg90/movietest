import React, {useEffect, useState} from 'react'
import {FilmList} from "../../components/film-list";
import {moviesService, genresService} from "../../services";
import style from './Home.module.css'
import {useHistory} from "react-router-dom";

export const Home = () => {
    const history = useHistory();
    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

    const fetchMovies = async () => {
        try {
       const {results, page, total_pages, total_results} = await moviesService.getMovies()
        return results;
        }catch (e) {
            console.log(e);
        }
    }

    const fetchGenres = async () => {
        try {
            const {genres} = await genresService.getGenres()
            return genres
        }catch (e) {
            console.log(e);
        }
    }

    const fetchMovieData = async () => {
        const requests = [fetchMovies(),fetchGenres()];
        try {
            setIsLoading(true)
            const [movies,genres] = await Promise.all(requests)
            const mergedGenresMovies = movies.map((movie) => {
                const {genre_ids} = movie;
                const movieGenresList = genre_ids.map(genreId => genres.find(el => el.id === genreId))

                return {
                    ...movie,
                    movieGenresList
                }
            })
            setMoviesList(mergedGenresMovies)
        }catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false)
        }
    }


    useEffect(() => {
        fetchMovieData()
    },[])

    const renderLoadingIndicator = () => (
        <div className={style.loading}>Loading...</div>
    )

    const onFilmClick = (film) => {
        history.push(`/movie/${film.id}`)
    }

    return (
        <div>
            {isLoading || isLoading === null ? renderLoadingIndicator() : (<FilmList onFilmClick={onFilmClick} items={moviesList}/>)}
        </div>
    )
}