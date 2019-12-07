var questions = [
    {
        question: "the answer is 1a",
        choice: ["1a", "2a", "3a", "4a"],
        answer: "1a"
    },
    {
        question: "the answer is 2b",
        choice: ["1b", "2b", "3b", "4b"],
        answer: "2b"
    },
    {
        question: "the answer is 3c",
        choice: ["1c", "2c", "3c", "4c"],
        answer: "3c"
    },
    {
        question: "the answer is 4d",
        choice: ["1d", "2d", "3d", "4d"],
        answer: "4d"
    },
]
var questionContainer = document.getElementById("question-container")

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
startGame()

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
