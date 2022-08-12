let hour = document.querySelector('#hour')
let minute = document.querySelector('#minute')
let second = document.querySelector('#second')
let date = document.querySelector('#date')

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
    minRotate()
    hourRotate()
}

function minRotate(){
    let minTurnDegree = minuteRotation(minCount)
    minute.style.transform = "rotate(" + minTurnDegree + "deg)" 
}

function hourRotate(){
    let hourTurnDegree = hourRotation(hourCount)
    hour.style.transform = "rotate(" + hourTurnDegree + "deg)"
}

setInterval(secondRotate, 1000)

date.innerText = Date()