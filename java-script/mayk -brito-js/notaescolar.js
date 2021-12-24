
//let score = 100

function getScore(score) {

let scoreA = score >= 90 && score <= 100
let scoreB = score >= 70 && score <= 89
let scoreC = score >= 50 && score <= 69
let scoreD = score >= 25 && score <= 49
let scoreE = score >= 0 && score <= 24

let scoreFinal;

if (scoreA) {
    scoreFinal = "A"
} else if (scoreB) {
    scoreFinal = "B"
} else if (scoreC) {
    scoreFinal = "C"
} else if (scoreD) {
    scoreFinal = "D"
} else if (scoreE) {
    scoreFinal = "E"
} else {
    scoreFinal = "Nota invalida"
}

console.log(scoreFinal)

}

getScore(89)