export default function Die(props){
    
    const dieClasses = [
        'die die-red',
        'die die-blue',
        'die die-green',
        'die die-yellow',
        'die die-purple',
        'die die-orange'
    ];

    const handleClick = () => {
        props.onClick(props.index);
    }
    
    return (
        <div className={`${dieClasses[props.index]} ${props.isSelected  ? 'die-selected' : ''}`} onClick={handleClick}>
        <h2> {props.number} </h2>
        </div>
    );
};