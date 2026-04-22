export function formatTime(timeStamp){

    const timeDate = new Date(timeStamp)
    let hours = timeDate.getHours()
    let timeString = ""
    if (hours < 10){
        timeString = '0' + hours + ':' + '00'
    }
    else timeString = hours + ':' + '00'
    return timeString
}