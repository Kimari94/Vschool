import { useState } from "react"

export default function Form(props){

    const {addMovies} = props

    // const [initstate, setInitState] = useState({
    //     title: '',
    //     description: '',
    //     rating: '',
    //     genre: ''
    // })


    const initstate = 
        {
            title: '',
            description: '',
            rating: '',
            genre: ''
        }
    


    const [formData, setFormData] = useState(initstate);


    function handleChange(e){
        const { name, value } = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
                [value]: value
            }
        })
    };

    function handleSubmit(e){
        e.preventDefault();
        addMovies(formData);
        setFormData(initstate)
    };

    return (
        <div>
            <h2>Add Movie</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" placeholder="title" onChange={handleChange}
                    name='title'
                    value={formData.title}
                
                />
                <input
                    type="text" placeholder="description" onChange={handleChange}
                    name='description'
                    value={formData.description}

                 />
                <input 
                    type="text" placeholder="rating" onChange={handleChange}
                    name='rating'
                    value={formData.rating}

                />

                <input type="text" placeholder="genre" onChange={handleChange}
                    name='genre'
                    value={formData.genre}
                
                />
                <button>Submit new Movie</button>
            </form>
        </div>
    )
}