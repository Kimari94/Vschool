import { useState } from "react";
import movies from "./moviesList"

export default function RandomMovie(props){
    
    const {addMovies} = props


    const [movieIndex, setMovieIndex] = useState(0);
    const [showDetails, setShowDetails] = useState(false);
    
    
    
    
    function getRandomMovie(){
        const randomIndex = Math.floor(Math.random() * movies.length);
        setMovieIndex(randomIndex)
    }
    
    function nextMovie(num){
        setMovieIndex(prevMovieIndex => {
            const newIndex = prevMovieIndex + num;
            if (newIndex < 0){
                return movies.length - 1
            } else if (newIndex === movies.length){
                return 0
            } else {
                return newIndex
            }
        })
    }


    function toggleDetails(){
        setShowDetails(!showDetails)
    }
       



    return(
        <div>
            <h1>{movies[movieIndex].title}</h1>
            { showDetails && (
            <div>
            <p>Descripton: {movies[movieIndex].description}</p>
            <p>Rating: {movies[movieIndex].rating}</p>
            </div>
            )}
            <button onClick={() => nextMovie(-1)}>Previous Movie</button>
            <button onClick={() => nextMovie(+1)}>Next Movie</button>
            <button onClick = {getRandomMovie}>Random Movie </button>
            <button onClick={toggleDetails}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
            <div>
                <button onClick={() => addMovies(movies[movieIndex])}>Save Movie</button>
            </div>
        </div>
    )
}