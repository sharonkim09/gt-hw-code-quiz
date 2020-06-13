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
var scoresEl = document.querySelector("#scores");
var backButtonEl = document.querySelector("#back-button");
var clearButtonEl = document.querySelector("#clear-button");
var responseEl = document.querySelector("#response");
var quizScoreEl = document.querySelector("#quiz-score");
var timeRemainingEl = document.querySelector("#time");
var submitButtonEl = document.querySelector("#submit-button");
var initialsInputEl = document.querySelector("#initials");
//
var secondsLeft = 60;
//High Score variables
var highScoresEl = document.querySelector("#highScores-button");
var highScoresStored = [];
var questionIndex = 0;
var timePenalty = 15;
var timerInterval;
//timer not stopping at end..

// define questions in a single array as objects
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

//timer starts and displays question
//from class activity 8
function startQuiz() {
  //timer is off and  need to turn on when starting
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeRemainingEl.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      results();
    }
    //
  }, 1000);
  displayQuestions();
}
/**
 * When starting quiz, other sections are hidden and quiz questions will be displayed
 */
function displayQuestions() {
  mainEl.style = "display:none";
  resultSectionEl.style = "display:none";
  highScoresSectionEl.style = "display:none";
  quizSectionEl.style = "display:block";
  //questions and selections will appear
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
  questionIndex++;
  //compare the selected answer to the answer and display appropriate response message
  if (choiceBtn.getAttribute("id") === currentQuestion.answer) {
    // console.log("correct!");
    responseEl.textContent = "Correct!";
  } else {
    // console.log("Wrong!");
    responseEl.textContent = "Wrong!";
    //deduct time
    secondsLeft = secondsLeft - timePenalty;
  }

  //error on last question will get negative time....
  if (questionIndex === questions.length) {

    clearButtonEl(timerInterval);
    //hide questions and show results section
    results();
  } else {
    displayQuestions();
  }
}
//display results section with time left as score,hiding other section content
function results() {
  // clearInterval(timerInterval)
  quizScoreEl.textContent = secondsLeft;
  // console.log(secondsLeft);
  setTimeout(function () {
    mainEl.style = "display:none";
    quizSectionEl.style = "display:none";
    highScoresSectionEl.style = "display:none";
    resultSectionEl.style = "display:block";
  }, 1000);
}
// function getInputValue() {
//   var userInitials = document.getElementById("initials").value;
//   return userInitials;
// }

submitButtonEl.addEventListener("click", function () {
  // var initial = initialsInputEl;
  // highScoresStored.push({ initials: initial, score: secondsLeft });
  // //from 6/12 morning warmup
  // localStorage.setItem("score", JSON.stringify(highScores));
  // console.log(JSON.stringify(highScores));
  //start from the beginning
  secondsLeft=60;
  questionIndex=0;
  viewHighScores();
});

//view high scores
function viewHighScores() {
  resultSectionEl.style = "display:none";
  mainEl.style = "display:none";
  quizSectionEl.style = "display:none";
  highScoresSectionEl.style = "display:block";
  scoresEl.innerHTML = "";
}

function mainPage() {
  mainEl.style = "display:block";
  highScoresSectionEl.style = "display:none";
}



//Events used
startButtonEl.addEventListener("click", startQuiz);
//make the user be able to click quiz answers
questionsEl.addEventListener("click", function () {
  selectedChoice(event, currentQuestion);
});
// highScoresSectionEl.addEventListener("click", viewHighScores);
backButtonEl.addEventListener("click", mainPage);
highScoresEl.addEventListener("click", viewHighScores);
// clearButtonEl.addEventListener("click");
