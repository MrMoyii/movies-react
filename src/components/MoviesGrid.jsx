import { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';
import { MovieCard } from './MovieCard';
// import { get } from "../utils/httpClient";
    //import movies from './movies.json'
import styles from './MoviesGrid.module.css'

export function MoviesGrid(){
  
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   get("/discover/movie").then((data) => {
  //     setMovies(data.results);
  //   });
  // }, []);

  const [movies, setMovies] = useState([]);

  useEffect(() =>{
    get("/discover/movie").then(data => {
      setMovies(data.results)
    });
  }, []); //al pasar un arreglo vasio evito el looping, lo que hace el arreglo vacio es decirle q se ejecute una unica vez cuando se carge el componente
  return(
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </ul>
  )
}