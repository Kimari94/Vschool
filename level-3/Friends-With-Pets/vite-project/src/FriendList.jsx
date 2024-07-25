export default function FriendList(props) {

    const { name, age, pets } = props.item

    return (
        <div className="friendCard">
            <h1>Friends name: {name}</h1>
            <h2>Friends age: {age}</h2>
            {pets.map((pets, index) => (
                <div key={index} className="pets">
                    <h3>Friends pet {index + 1} : {pets.name} <br></br> Breed: {pets.breed}</h3>
                </div>
            ))}
        </div>
    )
}
