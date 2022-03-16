import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../utils/httpClient";
import styles from "./MovieDetails.module.css"

export function MovieDeatils(){
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    
    useEffect(() => {
        get("/movie/" + movieId).then(data => {
            setMovie(data)
        })
    }, [movieId])

    if(!movie) return null;

    const imgUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
    return (
        <div className={styles.detailsConteiner}>
            <img className={`${styles.col} ${styles.movieImage}`} src={imgUrl} alt={movie.title} />    
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}>
                    <strong>Title:</strong> {movie.title}
                </p>
                <p>
                    <strong>Genres:</strong>{" "}
                    {movie.genres.map(genre => genre.name).join(", ")}
                </p>
                <p>
                    <strong>Description:</strong> {movie.overview}
                </p>
            </div>
        </div>
    )
}