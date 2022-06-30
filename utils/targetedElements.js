
import {getElement} from "./selector.js";

const container = getElement('.container')
const audio = getElement('audio')
const prevBtn = getElement('#prev')
const playBtn = getElement('#play')
const nextBtn = getElement('#next')
const image = getElement('#image')
const title = getElement('#title')
const artist = getElement('#artist')
const progressContainer = getElement('#progress-container')
const progress = getElement('#progress')
const songCurrentTime = getElement('#current-time')
const songDuration = getElement('#duration')

export {container, audio, prevBtn,playBtn,nextBtn, image, title, artist, progressContainer, progress, songCurrentTime, songDuration}