// let grade = "B"
// switch (grade) {
//     case "A":
//         console.log("Grade A")
//         break
//     case "B":
//         console.log("Grade B")
//         break
//     case "C":
//         console.log("Grade C")
//         break
//     default:
//         console.log("Fail")
// }


// function greet (){
//     alert("Hello") 
// }
// setTimeout(greet , 2000)



// stopwatch


let second = 0
let minutes = 0
let hour = 0
let miliseconds = 0

let clockStarted = false
let P = document.querySelector('.miliseconds')
let p1 = document.querySelector('.second')
let p2 = document.querySelector('.minutes')
let p3 = document.querySelector('.hour')

function clock() {
    if (clockStarted) {
        miliseconds++
        P.innerHTML = miliseconds
        console.log(miliseconds)
    }
    if (miliseconds === 100) {
        second++
        miliseconds = 0
        p1.innerHTML = second
    }
    if (second === 60) {
        minutes++
        second = 0
        p2.innerHTML = minutes
    }
    if (minutes === 60) {
        hour++
        minutes = 0
        second = 0
        p3.innerHTML = hour
    }
    if (timesecond === clockStop) {
        second++
        p.innerHTML = second
    }

    let hourstring = hour
    let minutesstring = minutes
    let secondstring = second
    let milisecondsstring = miliseconds
    if (hour < 10) {
        hourstring = "0" + hourstring
    }

    if (minutes < 10) {
        minutesstring = "0" + minutesstring
    }
    if (second < 10) {
        secondstring = "0" + secondstring
    }
    if (miliseconds < 10) {
        milisecondsstring = "0" + milisecondsstring
    }
    let p3 = document.querySelector(".hour").innerHTML = hourstring
    let p2 = document.querySelector(".minutes").innerHTML = minutesstring
    let p1 = document.querySelector(".second").innerHTML = secondstring
    let p = document.querySelector(".miliseconds").innerHTML = milisecondsstring
}
let timeseconds;
function timesecond() {
    if (clockStarted) return
    clockStarted = true
    timeseconds = setInterval(clock, 10)
}
function clockStop() {
    clearInterval(timeseconds)
    clockStarted = false
}
function reset() {
    clockStarted = false
    second = 0
    minutes = 0
    hour = 0
    miliseconds = 0
    let p = document.querySelector('.miliseconds').innerHTML = "00"
    let p1 = document.querySelector('.second').innerHTML = "00"
    let p2 = document.querySelector('.minutes').innerHTML = "00"
    let p3 = document.querySelector('.hour').innerHTML = "00"
}





