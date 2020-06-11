//Define variables
// console.log("Hello")
//work on start button and clock starts when clicked..
var startButtonEl = document.querySelector("#start-button");
var mainEl = document.querySelector("#main-page");
var quizSectionEl = document.querySelector("#quiz-section");
var questionsEl= document.querySelector("#choices");
var choice1El= document.querySelector("#choice1");
var choice2El= document.querySelector("#choice2");
var choice3El= document.querySelector("#choice3");
var choice4El= document.querySelector("#choice4");
var resultSectionEl= document.querySelector("#result-section");
var highscoreEl= document.querySelector("#highscore-section")
var backButtonEl= document.querySelector("#back-button");
var clearButtonEl= document.querySelector("#clear-button");
//timer var
var timeEl = document.querySelector(".time");
var secondsLeft = 75;
//highscore variable
var highScoresEl= document.querySelector("#highScores-button");
//set initial index of question to 0 
var questionIndex = 0;



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
//now can be accessed as index
var currentQuestion = questions[questionIndex]

//Define functions
// function startQuiz() {
//   console.log("Hello");
// }

//from class activity 8
function startQuiz() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    //stops timer from running in background
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}


//TO-DO list
//need to create a function for question to compare user's answer and correct answer

// need to make main page hide when button clicked and show questions and when viewing highscores

// still need to workout highscores

//need to make clear and back buttons work 

//need to use localStorage to save initials  

//need to restart quiz by going back to main page



// startQuiz();
//Call Functions
// setTime();
//Add Events
startButtonEl.addEventListener("click", startQuiz);
// console.log(startButton);
