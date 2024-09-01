import { useState } from "react"
import { v4 as uuidv4 } from "uuid";



export default function Favorites(props) {

    const { topText, bottomText, meme } = props
    const [savedMeme, setSavedMeme] = useState([])
    const [editMemeId, setEditMemeId] = useState(null);
    const [editTopText, setEditTopText] = useState('');
    const [editBottomText, setEditBottomText] = useState('');


    function savedMemes(newTopText, newBottomText, newMeme) {
        setSavedMeme((prevSavedMeme) => [
            ...prevSavedMeme,
            {
                id: uuidv4(),
                topText: newTopText,
                bottomText: newBottomText,
                meme: newMeme
            }
        ]);
    }

    function handleClick(e) {
        e.preventDefault();
        savedMemes(topText, bottomText, meme);
    }

    function editMeme(id, currentTopText, CurrentBottomText) {
        setEditMemeId(id);
        setEditTopText(currentTopText);
        setEditBottomText(CurrentBottomText);
    }

    function updateMeme() {
        setSavedMeme((prevSavedMeme) =>
            prevSavedMeme.map((meme) =>
                meme.id === editMemeId ? { ...meme, topText: editTopText, bottomText: editBottomText } : meme
            )
        );
        setEditMemeId(null);
        setEditBottomText('');
        setEditTopText('');
    }

    function DeleteMeme(id) {
        setSavedMeme((prevSavedMeme) => prevSavedMeme.filter((meme) => meme.id !== id))
    }
   



    const memeElements = savedMeme.map((meme) => (
        <div key={meme.id} className="SAVEDmeme">
            <img src={meme.meme} alt="savedMeme" />
            {editMemeId === meme.id ? (
                <>
                <div>
                    <input 
                    type="text"
                    value={editTopText}
                    onChange = {(e) => setEditTopText(e.target.value)}
                    placeholder="Edit Top Text"  />
                </div>
                <div>
                    <input 
                    type="text"
                    value={editBottomText}
                    onChange = {(e) => setEditBottomText(e.target.value)}
                    placeholder="Edit Bottom Text"  />
                </div>
                <button onClick={updateMeme}>Save Changes</button>
                </>
            ) : (
                <> 
                <div className="SAVEDtopText">{meme.topText}</div>
                <div className="SAVEDbottomText">{meme.bottomText}</div>
                <button onClick = {() => editMeme(meme.id, meme.topText, meme.bottomText)}>Edit Saved Meme</button>
                <button onClick = {() => DeleteMeme(meme.id)}> Delete Saved Meme</button>
                </>
                )}
                </div>
            ));
    
                


    return (
        <>
            <button onClick={handleClick}> Save Meme </button>
            <h1>Favorites:</h1>
            <div className="savedMemes">
                {memeElements}
            </div>
           
        </>
    )
}