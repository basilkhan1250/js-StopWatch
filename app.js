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

let clockStarted = false
let p = document.querySelector('.miliseconds')
let p1 = document.querySelector('.second')
let p2 = document.querySelector('.minutes')
let p3 = document.querySelector('.hour')

function clock() {
    second++
    p.innerHTML = second
    if (second === 100) {
        minutes++
        second = 0
        p1.innerHTML = minutes
    }
    if (minutes === 60) {
        hour++
        minutes = 0
        p2.innerHTML = hour
    }
    if (timesecond === clockStop) {
        second++
        p.innerHTML = second
    }
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
    let p = document.querySelector('.miliseconds').innerHTML = "00"
    let p1 = document.querySelector('.second').innerHTML = "00"
    let p2 = document.querySelector('.minutes').innerHTML = "00"
    let p3 = document.querySelector('.hour').innerHTML = "00"
}










