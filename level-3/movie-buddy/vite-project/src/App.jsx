import { useState } from 'react'
import './App.css'
import RandomMovie from './Components/RandomMovie'
import Navbar from './Components/navbar';
import FavoriteMovies from './Components/FavoriteMovies';
import Form from './Components/Form';

function App() {
  

    const [theme, setTheme] = useState('light');

    function toggleTheme(){
      setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

    const [favMovies, setFavMovies] = useState([])

    function addMovies(newMovie){
      setFavMovies(prevFavMovies => {
        return [...prevFavMovies, newMovie]
      })
    }
    
    console.log(favMovies)



  return (
    <div className={`${theme} main`}>
      <Navbar toggleTheme = {toggleTheme} />
      <RandomMovie addMovies={addMovies} />
      <Form addMovies={addMovies} />
      <FavoriteMovies favMovies={favMovies} />
    </div>
  )
}

export default App
