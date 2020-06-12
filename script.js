//Define variables
// console.log("Hello")
//work on start button and clock starts when clicked..
var startButtonEl = document.querySelector("#start-button");
var mainEl = document.querySelector("#main-page");
var quizSectionEl = document.querySelector("#quiz-section");
var quizQuestionsEl= document.querySelector("#questions");
var questionsEl= document.querySelector("#choices");
var choice1El= document.querySelector("#choice1");
var choice2El= document.querySelector("#choice2");
var choice3El= document.querySelector("#choice3");
var choice4El= document.querySelector("#choice4");
var resultSectionEl= document.querySelector("#result-section");
var highscoreEl= document.querySelector("#highscore-section")
var backButtonEl= document.querySelector("#back-button");
var clearButtonEl= document.querySelector("#clear-button");
var responseEl = document.querySelector("#response")
//timer var
var timeEl = document.querySelector(".time");
var secondsLeft = 75;
//highscore variable
var highScoresEl= document.querySelector("#highScores-button");
//set initial index of question to 0 
var questionIndex = 0;
var timerRunning = false;


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

//timer starts and displays question... 
//from class activity 8
function startQuiz() {
  //timer is off and  need to turn on when starting
  timerRunning = true;
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    //stops timer from running in background
    if (secondsLeft === 0) {
      //need to stop timer when 0 
      timerRunning= false;
      clearInterval(timerInterval);
      //need to display result section
    }
  }, 1000);
  displayQuestions();
}
/**
 * When starting quiz, other sections are hidden and quiz questions will be displayed
 */
function displayQuestions(){
  //when i start quiz, everything should be hidden except quiz
  //need to display question choices on the button
  mainEl.style = "display:none";
  resultSectionEl.style = "display:none";
  highScoresEl.style ="display:none";

  quizQuestionsEl.textContent = currentQuestion.question;
  choice1El.textContent = currentQuestion.choice1;
  choice2El.textContent = currentQuestion.choice2;
  choice3El.textContent = currentQuestion.choice3;
  choice4El.textContent = currentQuestion.choice4;
}
//now to let user to select the questions buttons 
  function selectedChoice(event, currentQuestion){
    event.preventDefault;
    var choiceBtn = event.target;
    //console.log(choiceBtn);


    //now to compare the selected answer to the answer and display appropriate message
    if(choiceBtn.getAttribute("id")===currentQuestion.answer){
      console.log("correct!")
      //instead of console logging, set a variable and display on page...
      responseEl.textContent="Correct!";
    } else {
      console.log("Wrong!")
      responseEl.textContent="Wrong!";
    }
  }

//make the user be able to click quiz answers
questionsEl.addEventListener("click", function(){
  selectedChoice(event, currentQuestion)
})


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
