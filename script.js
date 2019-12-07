var questions = [
    {
        question: "the answer is 1",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 1
    },
    {
        question: "the answer is 2",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 2
    },
    {
        question: "the answer is 3",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 3
    },
    {
        question: "the answer is 4",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 4
    },
]

var score = 0;
var questionCounter = 0;

function startGame{
    question.forEach(
        currentQuestion, questionNumber
    )
}

function nextQuestion{
//creat  counter
//using counter to go through the index
}

function selectAnswer{
//and array of all the choice
}

//timmer function golbal while quiz
//start fuction to start quiz and timer
//quiz begin, clicking an choice moves to next Q
//if time runs out or all Q are done, go to result screen
//result screen local storage, high score
//make different index file for each one????
//if not button style display = none, block




for (i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    score++

}
alert("You got " + score +"/" + questions.length);
