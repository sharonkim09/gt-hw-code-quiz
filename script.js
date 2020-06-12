//Define variables
// console.log("Hello")

var startButtonEl = document.querySelector("#start-button");
var mainEl = document.querySelector("#main-page");
var quizSectionEl = document.querySelector("#quiz-section");
var quizQuestionsEl = document.querySelector("#questions");
var questionsEl = document.querySelector("#choices");
var choice1El = document.querySelector("#choice1");
var choice2El = document.querySelector("#choice2");
var choice3El = document.querySelector("#choice3");
var choice4El = document.querySelector("#choice4");
var resultSectionEl = document.querySelector("#result-section");
var highScoresSectionEl = document.querySelector("#highscore-section");
var scoresEl = document.querySelector("#scores")
var backButtonEl = document.querySelector("#back-button");
var clearButtonEl = document.querySelector("#clear-button");
var responseEl = document.querySelector("#response");
var quizScoreEl = document.querySelector("#quiz-score");
var timeRemainingEl = document.querySelector("#time");
var submitButtonEl = document.querySelector("#submit-button");
var secondsLeft = 75;
//highscore variable
var highScoresEl= document.querySelector("#highScores-button");
//set initial index of question to 0
var questionIndex = 0;
var timePenalty=15;
var timerInterval;


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
var currentQuestion = questions[questionIndex];

//timer starts and displays question...
//from class activity 8
function startQuiz() {
  //timer is off and  need to turn on when starting
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeRemainingEl.textContent = secondsLeft;
    //stops timer from running in background
  }, 1000);
  displayQuestions();
}
/**
 * When starting quiz, other sections are hidden and quiz questions will be displayed
 */
function displayQuestions() {
  //when i start quiz, everything should be hidden except quiz
  //need to display question choices on the button
  mainEl.style = "display:none";
  resultSectionEl.style = "display:none";
  highScoresSectionEl.style = "display:none";

  currentQuestion = questions[questionIndex];
  quizQuestionsEl.textContent = currentQuestion.question;
  choice1El.textContent = currentQuestion.choice1;
  choice2El.textContent = currentQuestion.choice2;
  choice3El.textContent = currentQuestion.choice3;
  choice4El.textContent = currentQuestion.choice4;
}
//let user select the questions' buttons
function selectedChoice(event, currentQuestion) {
  event.preventDefault;
  var choiceBtn = event.target;
  //console.log(choiceBtn);
  //next question
  questionIndex++;

  //now to compare the selected answer to the answer and display appropriate message
  if (choiceBtn.getAttribute("id") === currentQuestion.answer) {
    // console.log("correct!");
    //instead of console logging, set a variable and display on page...
    responseEl.textContent = "Correct!";
  } else {
    // console.log("Wrong!");
    responseEl.textContent = "Wrong!";
    //deduct time
    secondsLeft = secondsLeft - timePenalty;
  }

  //error on last question ....
  //fixing..still working..
  if (questionIndex === questions.length) {
    // console.log()
    //hide questions and show results section
    results();
  } else {
    displayQuestions();
  }
}

// console.log(end)

//to display results section with time and string displayed and hidng other content
//empty array will store initials

function results() {
  quizScoreEl.textContent = secondsLeft;
  // console.log(secondsLeft);
  setTimeout(function(){
    mainEl.style = "display:none";
    quizSectionEl.style = "display:none";
    highScoresSectionEl.style = "display:none";
    resultSectionEl.style = "display:block";
  },1000)
}
// function getInputValue() {
//   var userInitials = document.getElementById("initials").value;
//   return userInitials;
// }
submitButtonEl.addEventListener("click", function () {
  // var initial = getInputValue();
  // //  console.log(initials);
  // //from 6/12 morning warmup
  // localStorage.setItem("score", JSON.stringify(highScores));
  // console.log(JSON.stringify(highScores));

  viewHighScores();
});

//view high scores
function viewHighScores() {
  resultSectionEl.style = "display:none";
  mainEl.style="display:none";
  quizSectionEl.style = "display:none";
  highScoresSectionEl.style = "display:block";
  scoresEl.innerHTML="";
}

function mainPage(){
  mainEl.style= "display:block";
  highScoresSectionEl.style = "display-block";
}


//Add Events
startButtonEl.addEventListener("click", startQuiz);
//make the user be able to click quiz answers
questionsEl.addEventListener("click", function () {
  selectedChoice(event, currentQuestion);
});
// highScoresSectionEl.addEventListener("click", viewHighScores);
backButtonEl.addEventListener("click", mainPage);
highScoresEl.addEventListener("click",viewHighScores)
// clearButtonEl.addEventListener("click");
// console.log(startButton);
