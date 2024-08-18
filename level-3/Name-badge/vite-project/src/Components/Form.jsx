import { useState } from "react"



export default function BadgeForm(props){

    const {addBadges} = props

    const blankForm = {
        name: '',
        description: '',
        phoneNumber: '',
        userType: '',
        terms: false,
    };


    const [formData, setFormData] = useState(blankForm)


    function handleChange(e){
        const {name, value, type, checked} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        addBadges(formData)
        setFormData(blankForm)
    }


    return (
        <div className="badgeForm">
            <form onSubmit={handleSubmit}>
                <label>Name 
                    <input 
                    placeholder="Name"
                    name='name' 
                    value={formData.name}  
                    minLength={3} 
                    onChange={handleChange}
                    required 
                    />
                </label>

                <label>Description 
                    <input 
                    name='description'
                    value={formData.description}
                    placeholder="Description" 
                    minLength={3} 
                    onChange={handleChange}
                    required 
                    />
                </label>
                    
                <label>Phone Number
                    <input 
                    name='phoneNumber'
                    title="Please Enter a Valid Phone Number"
                    pattern="\d*"
                    value = {formData.phoneNumber}
                    minLength={3} 
                    placeholder="Phone Number"
                    onChange={handleChange}
                    required />
                </label>

                <label>Employee
                    <input 
                    type="radio"
                    value= 'employee'
                    checked = {formData.userType === 'employee'}
                    name="userType"
                    id="employee"
                    onChange={handleChange}/>
                    
                </label>

                <label>Guest 
                    <input 
                    type="radio"
                    name="userType" 
                    value='guest'
                    checked = {formData.userType === 'guest'}
                    required 
                    id="guest"
                    onChange={handleChange}/>
                </label>

                <label >Agree to Terms and Conditions
                    <input 
                    name='terms' 
                    type="checkbox" 
                    checked={formData.terms}
                    required 
                    onChange={handleChange}/>
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}