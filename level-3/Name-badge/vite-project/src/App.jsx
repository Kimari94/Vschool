import { useState } from 'react'
import BadgeForm from './Components/Form'
import Badges from './Components/Badge'
import './App.css'

function App() {
  

  const [badges, setBadges] = useState([])

  function addBadges(newBadge){
    setBadges(prevBadges => {
      return [...prevBadges, newBadge]

    })
  }

  return (
    <>
      <BadgeForm addBadges = {addBadges} />
      <Badges badges = {badges} />
    </>
  )
}

export default App
