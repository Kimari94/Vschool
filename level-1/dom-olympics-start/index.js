header = document.getElementById('header');
message1 = document.getElementById('message1');
message2 = document.getElementById('message2');
message3 = document.getElementById('message3');
message4 = document.getElementById('message4');
messages = document.getElementsByClassName('messages');
theme = document.getElementById('theme-drop-down');


header.textContent = 'JavaScript Made This!!'
header.style.color = 'black'
header.style.fontWeight = 'bold'
header.style.textAlign = 'center'
header.style.fontSize = '50px'

header.innerHTML += '<span id = "author"> <br>David Bowen</span><span id = "wroteThis"> wrote the JavaScript</span>';

author = document.getElementById('author')
author.style.color = 'orange'
author.style.fontSize = '30px'
author.style.textAlign = 'left'

wroteThis = document.getElementById('wroteThis');
wroteThis.style.fontSize = '30px';

message1.textContent = "Hello There!"
message2.textContent = "HI! Great to hear from you"
message3.textContent = 'Same to you! I hope all is well with you!'
message4.textContent = 'Everything is going well. How are you?'

document.getElementById('clear-button').addEventListener('click', function() {
    for (let i = 0; i < messages.length; i++){
        messages[i].textContent = '' 
    }
});

theme.addEventListener('change', changeTheme);
function changeTheme() {
    if (theme.value === 'theme-two'){
        var messageLeft = document.querySelectorAll('.message.left');
        var messageRight = document.querySelectorAll('.message.right');
        for (let i = 0; i < messageLeft.length; i++){
        messageLeft[i].style.backgroundColor = 'black';
        messageLeft[i].style.color = 'white';
        }
        for (let i = 0; i < messageRight.length; i++){
            messageRight[i].style.backgroundColor = 'red';
        }
    } else if (theme.value === 'theme-one') {
        var messageLeft = document.querySelectorAll('.message.left');
        var messageRight = document.querySelectorAll('.message.right');
        for (let i = 0; i < messageRight.length; i++){
            messageRight[i].style.backgroundColor = 'lightblue';    
        }
        for (let i = 0; i < messageLeft.length; i++){
            messageLeft[i].style.backgroundColor = 'burlywood';
            messageLeft[i].style.color = 'black';
        }
    }
}