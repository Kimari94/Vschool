


export default function Navbar(props){

    const {toggleTheme} = props

    return (
        <div className="navbar"> 
            <h1>MovieBuddy</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}