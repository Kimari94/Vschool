import './App.css'
import Header from './props/header.jsx'
import Bloglist from './props/Bloglist.jsx'
import Footer from './props/Footer.jsx'
import data from './data.jsx'




function App() {
  const blogpost = data.map(item => {
    return (
      <Bloglist 
        key = {item.id}
        item = {item}
      />
  )},
)
    
    

  return (
  <div className='parent'>
    <Header />
    <div className='blog'>
    {blogpost}
    <button>OLDER POSTS</button>
    </div>
    <Footer />
  </div>
    )
  }
      
      

export default App
