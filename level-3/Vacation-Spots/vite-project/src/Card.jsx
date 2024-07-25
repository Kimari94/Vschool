export default function Card(props){
    let badgeText
    if (props.card.price < 499){
        badgeText = '$'
    } else if (props.card.price > 499 && props.card.price < 999){
        badgeText = '$$'
    } else {
        badgeText = '$$$'
    }
        
    

    return (
       
        <div className="cards">
            <h2>Destination:</h2>
            <h3>Where: {props.card.place}</h3>
            <p>{badgeText} price: {props.card.price}</p>
            <p>Season: {props.card.timeToGo}</p>
        </div>
        

    )
}