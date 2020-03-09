var questionContainer = document.getElementById("question-container");

var question = document.getElementById("question");

var choice1 = document.getElementById("button-1");
var choice2 = document.getElementById("button-2");
var choice3 = document.getElementById("button-3");
var choice4 = document.getElementById("button-4");

var score = 0;
var questionCounter = 0;
var lastQuestion = questions.length - 1;

function startGame() {
  var q = questions[questionCounter];
  question.innerHTML = q.question;
  choice1.innerHTML = q.choice[0];
  choice2.innerHTML = q.choice[1];
  choice3.innerHTML = q.choice[2];
  choice4.innerHTML = q.choice[3];
}
startGame();

function goToNextQuestion(whatTheUserClicked) {
    var correctText = questions[currentQuestionIndex].answer;
  
    if (whatTheUserClicked === correctText) {
      console.log("Correct!");
      score++;
    }
    else {
      console.log("Sorry, that is not correct.");
    }
    currentQuestionIndex++;
    getNewQuestion(currentQuestionIndex);
  
  
  }
  
  function answerClickSetUp() {
    var a = document.getElementById("answer1");
    var b = document.getElementById("answer2");
    var c = document.getElementById("answer3");
    var d = document.getElementById("answer4");
  
    a.addEventListener("click", function () { goToNextQuestion(a.innerText); });
    b.addEventListener("click", function () { goToNextQuestion(b.innerText); });
    c.addEventListener("click", function () { goToNextQuestion(c.innerText); });
    d.addEventListener("click", function () { goToNextQuestion(d.innerText); });
  }
  answerClickSetUp();
  
  startQuiz.addEventListener("click", function () {
    getNewQuestion(currentQuestionIndex);
  });
  
  var currentQuestion;
  function getNewQuestion(questionIndex) {
    var question = questions[questionIndex];
    currentQuestion = question;
    var title = question.title;
    // console.log(title);
    var questionEl = document.getElementById("question");
    questionEl.innerText = title;
  
    var choice1 = question.choices[0];
    var answerEl1 = document.getElementById("answer1");
    answerEl1.innerText = choice1;
    // console.log(choice1);
  
    var choice2 = question.choices[1];
    var answerEl2 = document.getElementById("answer2");
    answerEl2.innerText = choice2;
    // console.log(choice2);
  
    var choice3 = question.choices[2];
    var answerEl3 = document.getElementById("answer3");
    answerEl3.innerText = choice3;
    // console.log(choice3);
  
    var choice4 = question.choices[3];
    var answerEl4 = document.getElementById("answer4");
    answerEl4.innerText = choice4;
    // console.log(choice4);
  
  
    document.getElementById("question").innerText = title;
    document.getElementById("answer1").innerText = choice1;
    document.getElementById("answer2").innerText = choice2;
    document.getElementById("answer3").innerText = choice3;
    document.getElementById("answer4").innerText = choice4;
  
  
  }

// function nextQuestion() {
// //creat  counter
// //using counter to go through the index
// }

// function selectAnswer() {
// //and array of all the choice
// }

//timmer function golbal while quiz
//start fuction to start quiz and timer
//quiz begin, clicking an choice moves to next Q
//if time runs out or all Q are done, go to result screen
//result screen local storage, high score
//make different index file for each one????
//if not button style display = none, block

// for (i=0; i < questions.length; i++){
//     var response = window.prompt(questions[i].prompt);
//     score++

// }
// alert("You got " + score +"/" + questions.length);
