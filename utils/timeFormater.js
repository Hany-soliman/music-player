//Format function (Duration and currentTime)
let ret = ''
const timeFormat = (input) => {
    ret = ''
    // Hours, minutes and seconds
    let hrs = Math.floor(input / 3600);
    let mins = Math.floor((input % 3600) / 60);
    let secs = Math.floor(input % 60);
    // Output like "1:01" or "4:03:59" or "123:03:59"
    if (hrs > 0) {
        ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
    }
    ret += '' + mins + ':' + (secs < 10 ? '0' : '');
    ret += '' + secs;
    return ret;
}

export {timeFormat, ret}