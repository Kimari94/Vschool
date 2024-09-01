import { useEffect, useState } from "react"
import axios from 'axios'
import Favorites from './Favorites'


export default function Meme() {


    const [meme, setMeme] = useState('')

    const [bottomText, setBottomText] = useState('')
    const [topText, setTopText] = useState('')

    const getRandMeme = async () => {
        try {
            const response = await axios.get('https://api.imgflip.com/get_memes')

            const randomMemeData = Math.floor(Math.random() * response.data.data.memes.length);
            const memeData = response.data.data.memes[randomMemeData].url
            setMeme(memeData);
            setTopText('');
            setBottomText('');
        }
        catch (err) {
            console.log(err);
        }
       
    }



    useEffect(() => {
        getRandMeme();
    }, [])


   
    function handleBottomText(e) {
        setBottomText(e.target.value)
        
    }
    console.log(bottomText)



    function handleTopText(e) {
        setTopText(e.target.value)
      
    }
    console.log(topText)


    
    

    return (
        <div className='memeText'>

            <div className='inputs'>
                <div className='formGroup'>
                    <label htmlFor="topInput" className='label'>Top Text</label>
                    <input type="text" 
                    className="topInput" 
                    id="topText" 
                    value={topText}
                    onChange={handleTopText} />
                </div>
                <div className='formGroup'>
                    <label htmlFor="bottomText" className='label'>Bottom Text</label>
                    <input type="text"
                    className="bottomInput" 
                    id="bottomText"
                    value={bottomText} 
                    onChange={handleBottomText} />
                </div>
            </div>
            <div>
                <button className="memeButton" onClick={getRandMeme}>Generate New Meme</button>
            </div>

            <div className="memeBox">
                <img className="memeImage" src={meme} alt="meme" />
                <div className="topText">{topText}</div>
                <div className="bottomText">{bottomText}</div>
            </div>
            <Favorites topText = {topText} bottomText = {bottomText} meme = {meme}/>
        </div>
    )
}
