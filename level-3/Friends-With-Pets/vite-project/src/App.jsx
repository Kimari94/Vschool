import './App.css'
import FriendList from './FriendList.jsx'
import data from './Friends.jsx'
import Header from './Header.jsx'

function App() {
  const friends = data.map((item, i) =>{
    return (
      <FriendList
      item = {item}
      key = {i}
      />
    )
  })

  return (
    <>
    <Header />
    <div className= 'cardContainer'>
    {friends}
    </div>
    </>
  )
}

export default App
