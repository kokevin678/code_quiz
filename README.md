# Code Quiz

Code Quiz game. In this game you will be answer a series of question

## Built With

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Bootstrap](https://getbootstrap.com/)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Demo

![Demo](/assets/images/codeQuiz.gif)

## Code Snippets

start the quiz

```js
startQuiz.addEventListener("click", function() {
  getNewQuestion(currentQuestionIndex);
});
```

current question, get next question

```js
function getNewQuestion(questionIndex) {
  var question = questions[questionIndex];
  currentQuestion = question;
  var title = question.title;
  var questionEl = document.getElementById("question");
  questionEl.innerText = title;

  var choice1 = question.choices[0];
  var answerEl1 = document.getElementById("answer1");
  answerEl1.innerText = choice1;

  var choice2 = question.choices[1];
  var answerEl2 = document.getElementById("answer2");
  answerEl2.innerText = choice2;

  var choice3 = question.choices[2];
  var answerEl3 = document.getElementById("answer3");
  answerEl3.innerText = choice3;

  var choice4 = question.choices[3];
  var answerEl4 = document.getElementById("answer4");
  answerEl4.innerText = choice4;

  document.getElementById("question").innerText = title;
  document.getElementById("answer1").innerText = choice1;
  document.getElementById("answer2").innerText = choice2;
  document.getElementById("answer3").innerText = choice3;
  document.getElementById("answer4").innerText = choice4;
}
```

event listener for clicked answer

```js
function answerClickSetUp() {
  var a = document.getElementById("answer1");
  var b = document.getElementById("answer2");
  var c = document.getElementById("answer3");
  var d = document.getElementById("answer4");

  a.addEventListener("click", function() {
    goToNextQuestion(a.innerText);
  });
  b.addEventListener("click", function() {
    goToNextQuestion(b.innerText);
  });
  c.addEventListener("click", function() {
    goToNextQuestion(c.innerText);
  });
  d.addEventListener("click", function() {
    goToNextQuestion(d.innerText);
  });
}
answerClickSetUp();
```

## Deployed Link

- [See Live Site](https://kokevin678.github.io/code_quiz/)

## Authors

**Kevin Ko**

- [Link to Portfolio Site](https://kokevin678.github.io/responsive-portfolio/)
- [Link to Github](https://github.com/kokevin678)
- [Link to LinkedIn](https://www.linkedin.com/)
