import {art} from './utils/art.js'
import {container, audio, prevBtn,playBtn,nextBtn, image, title, artist, progressContainer, progress, songCurrentTime, songDuration} from "./utils/targetedElements.js";
import {renderStaticContent} from "./utils/renderStaticContent.js";
import {timeFormat, ret} from "./utils/timeFormater.js";
import {isPlaying} from "./utils/isPlaying.js";

//Globals
let i = 0

//Next Song
const getNextSong = () => {
    i++
    if (i > art.length - 1) {
        i = 0
    }
    renderSong()
    isPlaying(audio, playBtn)
}

//Previous Song
const getPrevSong = () => {
    i--
    if (i < 0) {
        i = art.length - 1
    }
    renderSong()
    isPlaying(audio, playBtn)
}

//Fetch song
const renderSong = () => {
    container.innerHTML = ''
    audio.src = art[i].mp3
    image.src = art[i].img
    title.textContent = art[i].title
    artist.textContent = art[i].artist
}



//Update the bar based on the current time of the song duration.
const updateProgressBar = (e) => {
    const {duration, currentTime} = e.target
    timeFormat(duration)
    Number.isNaN(duration)? songDuration.textContent = '0:00' : songDuration.textContent = ret
    timeFormat(currentTime)
    songCurrentTime.textContent = ret
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

//Seeking function
const setProgressBar = (e) => {
    const width = progressContainer.clientWidth
    const clickX = e.offsetX
    const {duration} = audio
    audio.currentTime = (clickX / width) * duration
}



//Event listeners
playBtn.addEventListener('click',
    () => {
        if (!audio.src) {
            renderSong()
            playBtn.classList.replace('fa-play', 'fa-pause')
        }
        isPlaying(audio, playBtn)
    })
nextBtn.addEventListener('click', getNextSong)
prevBtn.addEventListener('click', getPrevSong)
audio.addEventListener('timeupdate', updateProgressBar)
audio.addEventListener('ended', getNextSong)
progressContainer.addEventListener('click', setProgressBar)
window.addEventListener('DOMContentLoaded', ()=>{
    renderStaticContent(container)
})
