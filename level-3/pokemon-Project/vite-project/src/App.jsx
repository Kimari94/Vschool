import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import ChangeBackground from './BACKGROUND'

function App() {
  
  const [pokemon, setPokemon] = useState([])
  const [background, setBackground] = useState('#ffffff')




 useEffect(() => {
    axios.get('https://api.vschool.io/pokemon')
      .then(response => {
         setPokemon(Object.values(response.data))
        //  console.log(response.data)
        //  console.log(pokemon)
        const pokeData = response.data.objects[0].pokemon;
        setPokemon(pokeData)
      })
        .catch(err => console.log(err))
 }, [])

const pokemonList = pokemon.map((pokemon, i) => {
  return (
    <li key = {i}>{pokemon.name}</li>
  )
})


const getRandColor = async () => {
  try {
    const response = await axios.get('https://random-color.onrender.com/colors/random');
    const randomColor = response.data.hex;
    setBackground(randomColor)
  }
    catch(err) {
      console.log(err)
    }
}

useEffect(() => {
  getRandColor();
}, []);

 
  return (
    <div style ={{ backgroundColor: background }}>
      <ol>
       {pokemonList}
      </ol>
    <ChangeBackground background = {background} setBackground = {setBackground}/>
    </div>
  )
}

export default App
