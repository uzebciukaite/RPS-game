"use strict"

const plRock = document.querySelectorAll(".plRock")[0]
const plPaper = document.querySelector(".plPaper")
const plScissors = document.querySelector(".plScissors")
const startGame = document.getElementById("startGame")
const tryAgain = document.getElementById("tryAgain")
const compPoints = document.getElementById("compPoints")
const playerPoints = document.getElementById("playerPoints")
const h3 = document.querySelector("h3")
let compClass = ""
let compSelection = ""

let playersSelection = ""
function playersChoice(){
    
plRock.addEventListener("click", function(e){
    
    e.preventDefault()
    h3.innerText = "Now press START GAME to compete with computer"
    plPaper.style.display = "none"
    plScissors.style.display = "none"
    playersSelection = plRock.className
    console.log(playersSelection)
})
plPaper.addEventListener("click", function(e){
    e.preventDefault()
    h3.innerText = "Now press START GAME to compete with computer"
    plRock.style.display = "none"
    plScissors.style.display = "none"
    playersSelection = plPaper.className
    console.log(playersSelection) 
})
plScissors.addEventListener("click", function(e){
    e.preventDefault()
    h3.innerText = "Now press START GAME to compete with computer"
    plRock.style.display = "none"
    plPaper.style.display = "none"
    playersSelection = plScissors.className  
    console.log(playersSelection)
})


}

playersChoice()


function generateRandom (){
    
    startGame.addEventListener("click", function(){
        if(playersSelection === "") return        
        var computerChoices = document.querySelectorAll(".comp")
        var randomChoice = Math.floor(Math.random() * 3);
        compSelection = computerChoices[randomChoice]
        for(var x of computerChoices){
            if(x != compSelection)
            x.style.display = "none"
        }
        console.log(compSelection)
        console.log(computerChoices)
        countResults()
    })
    
}
generateRandom()

// COUNT GAME RESULTS

let countPlPoints = 0
let countCompPoints = 0


function countResults(){
 
var compClass = compSelection.classList[0]
console.log(compClass)
if(compClass === playersSelection){
  h3.innerText = "It's a tie..."
} else if (compClass === "plRock" && playersSelection === "plScissors" || compClass === "plPaper" && playersSelection === "plRock" || compClass === "plScissors" && playersSelection === "plPaper"){
    countCompPoints +=1
    compPoints.innerText = countCompPoints
    h3.innerText = "Sorry, computer won against you"
} else {
    countPlPoints +=1
    playerPoints.innerText = countPlPoints
    h3.innerText = "Congrats, you won!"
}

startGame.style.display = "none"
tryAgain.style.display = "flex"

}

// RESET GAME AND START AGAIN
function resetGame(){
  
    tryAgain.addEventListener("click", function(e){
        e.preventDefault()
    
    h3.innerText = "Choose either ROCK, PAPER or SCISSORS"
     plPaper.style.display = "flex"
     plScissors.style.display = "flex"
     plRock.style.display = "flex"
     compSelection = ""
     console.log(compSelection)
     playersSelection = ""
     console.log(playersSelection)
     let compClass = ""
     console.log(compClass)
     
     var computerChoices = document.querySelectorAll(".comp")
     for(var x of computerChoices){
            x.style.display = "flex"
        }
       startGame.style.display = "flex"
        tryAgain.style.display = "none"
        console.log(computerChoices)
    

      }) 
}


resetGame()
