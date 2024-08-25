import axios from 'axios'


export default function ChangeBackground({background, setBackground}){

    
    function changeBackground(){
        axios.get('https://random-color.onrender.com/colors/random')
        .then(response => {
         //  console.log(response)
         const randomColor = response.data.hex
         setBackground(randomColor)
         console.log(randomColor + 'is the new background color')
       })
        .catch(err => console.log(err))
  
       }


    return (
        <div style ={{ backgroundColor: background }}>

        <button onClick={changeBackground}>Change Background</button>
        </div>
    )
}