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
const p = document.querySelector('.miliseconds')
const p1 = document.querySelector('.second')
const p2 = document.querySelector('.minutes')
const p3 = document.querySelector('.hour')

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
}
let timeseconds;
function timesecond() {
    if(clockStarted) return
    clockStarted = true
    timeseconds = setInterval(clock, 10)
}
function reset() {
    clearInterval(timeseconds)
    clockStarted = false
    console.log(timeseconds)
}