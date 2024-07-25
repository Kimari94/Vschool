
import './App.css'
import Header from './Header.jsx'
import Card from './Card.jsx'
import data from './data.jsx'

function App() {
  const cards = data.map((item, i) => {
    return (
    <Card
      key = {i}
      card = {item}
      />
    );
  });

  return (
    <>
      <Header />
      <div className='cardContainer'>
      {cards}
      </div>
    </>
  )
}

export default App
