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


for (i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    score++

}
alert("You got " + score +"/" + questions.length);
