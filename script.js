//Define variables
// console.log("Hello")
//work on start button and clock starts when clicked..
var startButton = document.getElementById("start-button");
var mainPage = document.getElementById("main-page");
//timer var
var timeEl = document.querySelector(".time");
var secondsLeft = 75;

// define questions in a single object with key-value
var questions = [
  {
    question: "Commonly used data types DO NOT include: ",
    choice1: "strings",
    choice2: "booleans",
    choice3: "alerts",
    choice4: "numbers",
    answer: "choice3",
  },
  {
    question: "The condition in an if/else statement is enclosed within ___.",
    choice1: "quotes",
    choice2: "curly brackets",
    choice3: "parentheses",
    choice4: "square brackets",
    answer: "choice2",
  },
  {
    question: "Arrays in JavaScript can be used to store __.",
    choice1: "numbers and strings",
    choice2: "other arrays",
    choice3: "booleans",
    choice4: "all of the above",
    answer: "choice4",
  },
  {
    question:
      "String values must be enclosed within __ when being assigned to variables.",
    choice1: "commmas",
    choice2: "curly brackets",
    choice3: "quotes",
    choice4: "parentheses",
    answer: "choice3",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: "JavaScript",
    choice2: "terminal/bash",
    choice3: "for loops",
    choice4: "console.log",
    answer: "choice4",
  },
];

//Define functions
function startQuiz() {
  console.log("Hello");
}

//from class activity 8
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    //stops timer from running in background
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

startQuiz();
//Call Functions
setTime();
//Add Events
startButton.addEventListener("click", startQuiz);
// console.log(startButton);
