import { useState } from "react"
import memesData from "../memesData";


export default function Meme() {

    const [meme, setMeme] = useState({
        TopText: '',
        BottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)
    const [bottomText, setBottomText] = useState('')
    const [topText, setTopText] = useState('')

    function getMeme() {

        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme({
            ...meme,
            randomImage: memesArray[randomNumber].url
        })
    }

     function handleBottomText(e){
        e.preventDefault();
        setBottomText(e.target.value)
    }
    console.log(bottomText)

     function handleTopText(e){
        e.preventDefault();
        setTopText(e.target.value)
    }
    console.log(topText)

    return (
        <div className='memeText'>

            <div className='inputs'>
                <div className='formGroup'>
                    <label htmlFor="topInput" className='label'>Top Text</label>
                    <input type="text" className="topInput" id="topText" onChange={handleTopText} />
                </div>
                <div className='formGroup'>
                    <label htmlFor="bottomText" className='label'>Bottom Text</label>
                    <input type="text" className="bottomInput" id="bottomText" onChange={handleBottomText} />
                </div>
            </div>
            <div>
                <button className="memeButton" onClick={getMeme}>Generate New Meme</button>
            </div>

            <div className="memeBox">
            <img className="memeImage" src={meme.randomImage} alt="meme" />
            <div className="topText">{topText}</div>
            <div className="bottomText">{bottomText}</div>
            </div>

        </div>
    )
}
