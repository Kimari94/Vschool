import { useState } from "react"

export default function Counter(){
 
    const [count, setCount] = useState(0)

    function increment(){
        setCount(count + 1)
    }

    function decrement(){
        if (count > 0){
        setCount(count - 1)
        } else {
            console.log('Count is 0')
        }
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
        </div>
    )
}