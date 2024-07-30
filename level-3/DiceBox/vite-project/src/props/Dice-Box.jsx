import { useState } from "react"
import Die from "./die"

export default function DiceBox(){

    const [selectedIndices, setSelectedIndices] = useState([])

    const [rollCount, setRollCount] = useState(0)
    
    const diceNumbers = [1, 2, 3, 4, 5, 6]
    
    const getRandNum = () => Math.floor(Math.random() * diceNumbers.length) + 1
    
    const getRandNums = () =>  Array.from({length: 5}, getRandNum)
    
    const [diceNums, setDiceNums] = useState(getRandNums())


    const diceRoll = () => {
        setRollCount(prevCount => {
           const newCount = prevCount + 1;

           if(newCount >= 3){
            setDiceNums(diceNums.map((num, index)   =>
            selectedIndices.includes(index) ? num : 0
            ));
            return 0
           } else {

        setDiceNums(diceNums.map((num, index) =>
            selectedIndices.includes(index) ? num : getRandNum()
        ));
        return newCount;
            };
        });
    };
  


    const handleDieClick = (index) => {
        if (selectedIndices.includes(index)) {
            setSelectedIndices(selectedIndices.filter(i => i !== index));
        } else {
            setSelectedIndices([...selectedIndices, index])
        }
    };

    const resetDice = () => {
        setDiceNums([0,0,0,0,0]);
        setSelectedIndices([]);
    }

   


    return(
        <>
        <h1>Roll The dice!</h1>
        <div className="dice" >
            {diceNums.map((num, index) => (
                <Die key = {index}
                 number = {num}
                 index = {index}
                 isSelected = {selectedIndices.includes(index)}
                 onClick={handleDieClick}   />
            ))}
        </div>
        <div className="buttons">
        <button onClick={diceRoll}>Roll Again!</button>
        <button onClick={resetDice}>Reset Dice!</button>
        </div>
        </>
    )
}

