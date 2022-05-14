let socket = io()
let player;

const userInput = document.getElementById('textField');
const form = document.querySelector('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = userInput.value;
    socket.send(value)
});

socket.on('message', (data) => {
    userInput.value = data
    console.log(data);
    window.location.replace(`/?q=${data}`)
})


function loadYTAPIScript() {
    // console.log('loading YouTube script.');
    let tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function onYouTubeIframeAPIReady() {
    // console.log('function `onYouTubeIframeAPIReady` was called.');
    player = new YT.Player('player', {
        events: {
            'onError': onError,
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onError(event) {
    console.error('YouTube API error!', event);
} // _onError


/**
 * On player ready.
 *
 * This is callback function from `onReady` event in `onYouTubeIframeAPIReady()`.
 */
function onPlayerReady(e) {
    console.log('function `onPlayerReady` was called from `onReady` event callback.', e);
    listClickButtons();
}

function onPlayerStateChange(e) {
    // console.log('function `onPlayerStateChange` was called from `onStateChange` event callback.', e);
    let state = e.target.getPlayerState();
    let stateText = '';
    if (state === -1) {
        stateText = 'unstarted';
    } else if (state === YT.PlayerState.ENDED) {
        stateText = 'ended';
    } else if (state === YT.PlayerState.PLAYING) {
        stateText = 'playing';
    } else if (state === YT.PlayerState.PAUSED) {
        stateText = 'paused';
    } else if (state === YT.PlayerState.BUFFERING) {
        stateText = 'buffering';
    } else if (state === YT.PlayerState.CUED) {
        stateText = 'cued';
    }
    console.log('State text: ', stateText);
}

function listClickButtons() {
    console.log('Listen click buttons.');

    let isPlayed = false;
    const stopBtn = document.getElementById('yt-stop');
    const playpauseBtn = document.getElementById('yt-playpause');

    playpauseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        socket.emit('playPause');
    })


    stopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        socket.emit('stop');
    })

    socket.on('stop', () => {
        player.stopVideo();
        console.log('stopped');
    })
    socket.on('playPause', () => {
        if (isPlayed === false) {
            player.playVideo();
            isPlayed = true;
        } else {
            player.pauseVideo();
            isPlayed = false;
        }
        console.log('played or paused');
    })
}



document.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM ready.');
    loadYTAPIScript();
});