//Check if the audio is playing
const isPlaying = (audio, element) => {
    if (audio.paused) {
        element.classList.replace('fa-play', 'fa-pause')
        element.setAttribute('title', 'pause')
        audio.play()
    } else {
        element.classList.replace('fa-pause', 'fa-play')
        element.setAttribute('title', 'play')
        audio.pause()
    }
}
export {isPlaying}