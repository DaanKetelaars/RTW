let socket = io()
let play = document.getElementById('play')
let changeValue;

console.log(play);
play.addEventListener('click', () => {
    const test = () => {
        changeValue = play.innerText;
        console.log(changeValue);
        changeValue = 'OK';
        return changeValue;
    }
    socket.send(test(changeValue))
})
socket.on('message', (data) => {
    play.innerText = data
})