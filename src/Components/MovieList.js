import React from 'react'
import MovieCard from './MovieCard';



const MovieList = ({ movies,search }) =>{
    return (
        <div className="cardGroup">
        
        {movies
          .map((movies,key,el) => (
          <MovieCard movie={movies} key={el.id}/> 
        ))}
        </div>
    );
};

export default MovieList ;

