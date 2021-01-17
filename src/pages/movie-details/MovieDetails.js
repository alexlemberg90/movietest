import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import {moviesService} from "../../services";


export const MovieDetails = () => {
    const [filmDetails, setFilmDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {id} = useParams();
    const getMovieDetails = async () => {
        try {
        setIsLoading(true)
        const data = await moviesService.getMovieDetails(id)
        setFilmDetails(data)
        }catch (e) {
            console.error(e)
        }finally {
        setIsLoading(false)
        }
    }
    // adult: false
    // backdrop_path: "/srYya1ZlI97Au4jUYAktDe3avyA.jpg"
    // belongs_to_collection: {id: 468552, name: "Wonder Woman Collection", poster_path: "/8AQRfTuTHeFTddZN4IUAqprN8Od.jpg", backdrop_path: "/n9KlvCOBFDmSyw3BgNrkUkxMFva.jpg"}
    // budget: 200000000
    // genres: (3) [{…}, {…}, {…}]
    // homepage: "https://www.warnerbros.com/movies/wonder-woman-1984"
    // id: 464052
    // imdb_id: "tt7126948"
    // original_language: "en"
    // original_title: "Wonder Woman 1984"
    // overview: "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah."
    // popularity: 3663.168
    // poster_path: "/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
    // production_companies: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
    // production_countries: [{…}]
    // release_date: "2020-12-16"
    // revenue: 131400000
    // runtime: 151
    // spoken_languages: [{…}]
    // status: "Released"
    // tagline: "A new era of wonder begins."
    // title: "Wonder Woman 1984"
    // video: false
    // vote_average: 7.2
    // vote_count: 2746

    const film = filmDetails;

    useEffect(() => {
        getMovieDetails()

    },[]);

    if(isLoading) {
        return <div>Loading....</div>
    }

    return (
        ( filmDetails != null && <div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={`${film.original_title} poster`}/>
            </div>
            <div>
                <h2>{film.original_title}</h2>
                <h3>Genres: {film.genres.map(({name, id}) => <span key={id}>{name} </span>)} </h3>
                <span>Rating:{film.vote_average} (total vote: {film.vote_count})</span>
                <p>{film.overview}</p>
                <span>Release date:{film.release_date}</span>

            </div>
        </div> )
    )
}