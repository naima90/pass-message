
const messageIn = document.querySelector('#messageIn');
const sendBtn = document.querySelector('#sendBtn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg);


function sendMsg() {
    let content = messageIn.value;
    if(content === ''){
        alert('Please Enter a Valid Value. Current Value is Empty!')
    } else {
        messageOut.innerHTML = content;
        messageIn.value = '';
    }
    
}