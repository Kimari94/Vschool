/*defining global variables */
const list = document.getElementById('list');  // unordered list where items will appear after submitting//
const submit = document.getElementById('submit'); //submit button//
const item = document.getElementById('item') // the input box where users can type in their items//


/*event listener for when the submit button is clicked records data from the input box and dynamically adds it to a list item.
This event listener also creates 2 buttons labeled 'remove' and edit' */
submit.addEventListener('click', function(event){
    event.preventDefault();
    list.innerHTML += `<span><li class = "listItems"> ${item.value} <button class="remove">Remove</button><button class = "edit">Edit</button></li></span>`;
    const listItems = document.querySelectorAll('.listItems'); 
    for(let i = 0; i < listItems.length; i++){  //styling for the items added to the list//
        listItems[i].style.fontWeight = '900';
    }
    const removeButton = document.querySelectorAll('.remove'); //styling for the remove button
    for(let i = 0; i < removeButton.length; i++){
        removeButton[i].style.backgroundColor = 'lightBlue';
        removeButton[i].style.width = '70px';
        removeButton[i].style.margin = '15px 50px ';
    
    }
    
});

/*event listener for when the remove button is clicked. This will remove the corrosponding list item that was created*/
list.addEventListener('click', function(event){
    if(event.target.classList.contains('remove')){
        const listItem = event.target.parentNode.parentNode; //list item is = to the span element.
        list.removeChild(listItem); // remove the child of the span element which is the <li></li>
    }
})

/*Event listener for when the edit button is clicked. This will add an input box and change the button text from 'edit' to 'save' additionally the input has placeholder text that matches the corrosponding list item. If the user enters new text and clicks save the list item will be updated with the text. Lastly, once 'save' is clicked the text will return to 'Edit' */
list.addEventListener('click', function(event){
    if(event.target.classList.contains('edit')){
        const editButton = event.target;
        const listItem = editButton.parentNode.firstChild;

        if(editButton.textContent === 'Edit'){
            editButton.textContent = 'save';
            const input = document.createElement('input');
                input.setAttribute('placeholder', editButton.parentNode.firstChild.textContent);
                editButton.parentNode.insertBefore(input, editButton.nextSibling);
            } else {
                editButton.textContent = 'Edit';
                let input = editButton.nextSibling;
                let editText = input.value;
                listItem.textContent = editText;
                editButton.parentNode.removeChild(input);
            }
    }
});