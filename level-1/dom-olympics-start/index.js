/* notes within this document will by formated as such:
[notes about what is being done]
-(what is actually done)-

notes are always listed above the actual code. /*

/* Defining global variables */
header = document.getElementById('header');
message1 = document.getElementById('message1');
message2 = document.getElementById('message2');
message3 = document.getElementById('message3');
message4 = document.getElementById('message4');
messages = document.getElementsByClassName('messages');
theme = document.getElementById('theme-drop-down');

/*styling header*/
header.textContent = 'JavaScript Made This!!'
header.style.color = 'black'
header.style.fontWeight = 'bold'
header.style.textAlign = 'center'
header.style.fontSize = '50px'

/* adding span elements for further styling of header */
header.innerHTML += '<span id = "author"> <br>David Bowen</span><span id = "wroteThis"> wrote the JavaScript</span>';

/*defining and styling of the author text*/
author = document.getElementById('author')
author.style.color = 'orange'
author.style.fontSize = '30px'
author.style.textAlign = 'left'

/* more header styling for the text after the author */
wroteThis = document.getElementById('wroteThis');
wroteThis.style.fontSize = '30px';

/* changing text in messages to be more appropriate */
message1.textContent = "Hello There!"
message2.textContent = "HI! Great to hear from you"
message3.textContent = 'Same to you! I hope all is well with you!'
message4.textContent = 'Everything is going well. How are you?'

/* clear button functionality function */
document.getElementById('clear-button').addEventListener('click', function() {
    for (let i = 0; i < messages.length; i++){
        messages[i].textContent = '' 
    }
});

/* event listener for theme toggle */
theme.addEventListener('change', changeTheme);

/* function called in event listener. if and for loops to change background and text color of messages. */
function changeTheme() {
    if (theme.value === 'theme-two'){
        var messageLeft = document.querySelectorAll('.message.left');
        var messageRight = document.querySelectorAll('.message.right');
        for (let i = 0; i < messageLeft.length; i++){
        messageLeft[i].style.backgroundColor = 'black';
        messageLeft[i].style.color = 'white';
        }
        for (let i = 0; i < messageRight.length; i++){
            messageRight[i].style.backgroundColor = 'fireBrick';
            messageRight[i].style.color = 'white';
        }
    } else if (theme.value === 'theme-one') {
        var messageLeft = document.querySelectorAll('.message.left');
        var messageRight = document.querySelectorAll('.message.right');
        for (let i = 0; i < messageRight.length; i++){
            messageRight[i].style.backgroundColor = 'lightblue';  
            messageRight[i].style.color = 'black'  
        }
        for (let i = 0; i < messageLeft.length; i++){
            messageLeft[i].style.backgroundColor = 'burlywood';
            messageLeft[i].style.color = 'black';
        }
    }
}