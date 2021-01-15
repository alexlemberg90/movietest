import React, {useEffect, useState} from 'react'
import {FilmList} from "../components/film-list";
import {moviesService} from "../services";
import style from './Home.module.css'

export const Home = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

    const fetchMovies = async () => {
        try {
            setIsLoading(true);
       const {results, page, total_pages, total_results} = await moviesService.getMovies()
        setMoviesList(results);
        }catch (e) {
            console.log(e);
        }finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchMovies()
    },[])

    const renderLoadingIndicator = () => (
        <div className={style.loading}>Loading...</div>
    )

    return (
        <div>
            {isLoading || isLoading === null ? renderLoadingIndicator() : <FilmList items={moviesList}/>}
        </div>
    )
}