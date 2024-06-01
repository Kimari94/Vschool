const form = document.getElementById('travelForm');
const submit = document.getElementById('submit');
const query = document.querySelector;

function submitForm(){

    let name = form.elements["firstName"].value;
    let lastName = form.elements['lastName'].value;
    let age = form.elements['age'].value;
    let gender = form.elements['gender'].value;
    let location = form.elements['location'].value;
    let diet = [];

    if (form.elements['vegan'].checked){
        diet.push(document.getElementById('vegan').value);
    }

    if (form.elements['kosher'].checked){
        diet.push(document.getElementById('kosher').value);
    }

    if (form.elements['carnivore'].checked){
        diet.push(document.getElementById('carnivore').value);
    }

    const dietString = diet.join(', ')

    alert(`First name: ${name} \nLast name: ${lastName} \nAge: ${age} \nGender: ${gender} \nDestination ${location} \nDietary preferences: ${dietString}`);

    submit.preventDefault();

}

submit.addEventListener('click', submitForm);
