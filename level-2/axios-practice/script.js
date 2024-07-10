


axios.get('https://api.vschool.io/pokemon')
    .then(response => {
        const pokemon = response.data.objects[0].pokemon
        for (let i = 0; i < pokemon.length; i++){
            let h1 = document.createElement('h1')
            h1.textContent = pokemon[i].name;
            document.body.appendChild(h1);
        }
    })
    .catch(error => console.log(error));

axios.get('https://api.vschool.io/pokemon')
    .then(response => console.log(response.data.objects[0].pokemon))
    .catch(error => console.log(error))
