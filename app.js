
console.log("test");



let homeScore = 0
let awayScore = 0



function resetScore() {
    homeScore = 0
    awayScore = 0
    drawHomeScore()
    drawAwayScore()
}

function homeOne() {
    console.log("home 1");
    homeScore = homeScore+1
    console.log(homeScore)
    drawHomeScore()
}

function homeThree() {
    console.log("home 3");
    homeScore = homeScore+3
    console.log(homeScore)
    drawHomeScore()
}

function drawHomeScore() {
    let codeWindow = document.getElementById("home-score")
    codeWindow.innerText = homeScore
}

function awayOne() {
    console.log("away 1");
    awayScore = awayScore+1
    console.log(awayScore)
    drawAwayScore()
}

function awayThree() {
    console.log("away 3");
    awayScore = awayScore+3
    console.log(awayScore)
    drawAwayScore()
}

function drawAwayScore() {
    let codeWindow = document.getElementById("away-score")
    codeWindow.innerText = awayScore
}

