import { useState } from "react"




export default function FavoriteMovies(props){

    const {favMovies} = props


    const [movieStyles, setMovieStyles] = useState('')

    function changeTheme(){
        setMovieStyles(prevMovieStyle => prevMovieStyle === 'redTheme' ? 'blueTheme' : 'redTheme')
    }


    const movieElements = favMovies.map((movie, i) => {
        return (
            <div key={i} className={movieStyles}>
                <h1>{movie.title}</h1>
                <h3> Description: {movie.description} </h3>
                <p> Rating :{movie.rating} </p>
                <button onClick={changeTheme}>Change Theme</button>
            </div>
        )
    })

    return (
        <div >
        <h1>Favorite Movies</h1>
        {movieElements}
        </div>
    )
}