let hour = document.querySelector('#hour')
let minute = document.querySelector('#minute')
let second = document.querySelector('#second')

// let degrees = 45;
// hour.style.transform = "rotate(" + degrees + "deg)"

function secondRotation(s){
    return s * 360/60
}
function minuteRotation(m){
    return m * 360/60
}
function hourRotation(h) {
    return h * 360/12
}
const now = new Date()
let secondCount = now.getSeconds()
let minCount = now.getMinutes()
let hourCount = now.getHours()
console.log(now)

function secondRotate() {
    secondCount++
    let secondTurnDegree = secondRotation(secondCount)
    second.style.transform = "rotate(" + secondTurnDegree + "deg)"
}
setInterval(secondRotate, 10)

function minRotate(){
    minCount = secondCount/60
    let minTurnDegree = minuteRotation(minCount)
    minute.style.transform = "rotate(" + minTurnDegree + "deg)" 
}
 setInterval(minRotate, 600)

function hourRotate(){
    hourCount = minCount/60
    let hourTurnDegree = hourRotation(hourCount)
    hour.style.transform = "rotate(" + hourTurnDegree + "deg)"
}
setInterval(hourRotate, 1200)


