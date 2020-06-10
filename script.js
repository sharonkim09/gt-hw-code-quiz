//Define variables
// console.log("Hello")
//work on start button and clock starts when clicked..
var startButton = document.getElementById("start-button");
var mainPage = document.getElementById("main-page");
//timer var
var timeEl = document.querySelector(".time");
var secondsLeft=75;
//Define functions
function startQuiz(){
    console.log("Hello");
}

//from class activity 8
function setTime(){
    var timerInterval= setInterval(function(){
        secondsLeft--;
        timeEl.textContent= secondsLeft;
        //stops timer from running in background
        if(secondsLeft === 0){
            clearInterval(timerInterval);
        }
    },1000);
}


startQuiz();
//Call Functions
setTime();
//Add Events
startButton.addEventListener("click",startQuiz);
// console.log(startButton);