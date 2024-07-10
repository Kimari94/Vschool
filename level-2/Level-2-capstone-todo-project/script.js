const form = document.form;
const list = document.getElementsByClassName('toDoList')[0];
const submit = document.getElementById("submit-btn")

function getData() {
    axios
        .get('https://api.vschool.io/DavidBowen/todo')
        .then((res) => listData(res.data))
        .catch((error) => console.log(error));
}


function clearListData() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault()
    const newItem = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value,
        imgUrl: form.imgUrl.value,
    };

    axios
        .post('https://api.vschool.io/DavidBowen/todo', newItem)
        .then((res) => getData())
        .catch((error) => console.log(error))
});

function listData(data) {
    clearListData();
    for (let i = 0; i < data.length; i++) {
        const id = data[i]._id

        const div = document.createElement('div');

        list.appendChild(div);
        const h1 = document.createElement('h1')
        h1.textContent = data[i].title;
        h1.className = 'toDoItemTitle';
        div.appendChild(h1);
        div.className = 'toDoItem';

        const p = document.createElement('p');
        p.textContent = data[i].description;
        div.appendChild(p);
        p.className = 'toDoItemDetails';

        const p2 = document.createElement('p');
        p2.textContent = data[i].price;
        div.appendChild(p2);
        p.className = 'toDoItemDetails';

        const img = document.createElement('img');
        img.src = data[i].imgUrl;
        div.appendChild(img);
        img.className = 'toDoItemImg'

        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'toDoButton';
        div.appendChild(buttonDiv)

        const button = document.createElement('button');
        button.textContent = 'Edit';
        buttonDiv.appendChild(button);
        button.className = 'toDoButtons';

        const button2 = document.createElement('button');
        button2.textContent = 'Delete';
        buttonDiv.appendChild(button2);
        button.className = 'toDoButtons';

        const label = document.createElement('label');
        label.textContent = 'Completed';
        div.appendChild(label);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        div.appendChild(checkbox);
        checkbox.className = 'checkbox';

        if (data[i].completed === true) {
            h1.style.textDecoration = 'line-through';
            p.style.textDecoration = 'line-through';
            p2.style.textDecoration = 'line-through';
        }

        checkbox.addEventListener('change', () => {     //seperate
            const completed = checkbox.checked;
            axios
                .put(`https://api.vschool.io/DavidBowen/todo/${id}`, { completed })
                .then(() => {
                    if (completed) {
                        h1.style.textDecoration = 'line-through';
                        p.style.textDecoration = 'line-through';
                        p2.style.textDecoration = 'line-through';
                    } else {
                        h1.style.textDecoration = 'none';
                        p.style.textDecoration = 'none';
                        p2.style.textDecoration = 'none';
                    }
                })
                .catch((error) => console.log(error));
        });

        button.addEventListener('click', function () { //seperate
            h1.remove(this);
            p.remove(this);
            p2.remove(this);
            img.remove(this);

            const editImg = document.createElement('input');
            editImg.value = img.src;
            div.prepend(editImg);
            editImg.setAttribute('class', 'editInput');

            const editDescription = document.createElement('input');
            editDescription.value = p.textContent;
            div.prepend(editDescription);
            editDescription.setAttribute('class', 'editInput')

            const editPrice = document.createElement('input');
            editPrice.value = p2.textContent
            div.prepend(editPrice);
            editPrice.setAttribute('class', 'editInput')

            const editTitle = document.createElement('input');
            editTitle.value = h1.textContent;
            div.prepend(editTitle);
            editTitle.setAttribute('class', 'editInput');

            button2.remove(this);
            const saveButton = document.createElement('button');
            saveButton.textContent = 'save';
            div.appendChild(saveButton);

            saveButton.addEventListener('click', function () {
                const newSave = {
                    title: editTitle.value,
                    description: editDescription.value,
                    price: editPrice.value,
                    imgUrl: editImg.value,
                };

                console.log(newSave);

                axios
                    .put(`https://api.vschool.io/DavidBowen/todo/${id}`, newSave)
                    .then((res) => getData())
                    .catch((error) => console.log(error));

                editPrice.remove(this);
                editImg.remove(this);
                editDescription.remove(this);
                editTitle.remove(this);
            });
        });

        button2.addEventListener('click', () => {   //seperate
            axios
            .delete("https://api.vschool.io/DavidBowen/todo/" + id)
            .then((res) => getData())
            .catch((error) => console.log(error));
    });
    }
}

getData();