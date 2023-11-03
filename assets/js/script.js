var timer = document.querySelector("#timer");
var count = 60;
var question = document.querySelector("#question")
var answers = document.querySelector("#answers")
var currentQuestion = 0;
var startQuiz = document.querySelector("#start-quiz");
var correctAnswer = false;

var holdQuestion = [
{
    question: "Which one is a tag selector?", 
    answers: ["?", "$", ".", "<p>"],
    correctAnswer: "<p>"

},
{
    question: "What does CSS stand for?", 
    answers: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
    correctAnswer: "Cascading Style Sheets"
    
},
{
    question: "Which CSS property is used to control the size of an element's content area?", 
    answers: ["width", "size", "content-size", "box-size"],
    correctAnswer: "width"
    
},
{
    question: "What is the purpose of the addEventListener method in JavaScript?", 
    answers: ["To add an event handler function to an element", "To create a new HTML element", "To change the page's title", "To modify the styling of an element"],
    correctAnswer: "To add an event handler function to an element"
    
}
];

startQuiz.addEventListener("click", function(){
    alert("The quiz has started!")
    startGame();
    myTimer();
});


function myTimer(){
  var timeInterval = setInterval(function(){
    count--;
    timer.textContent = "Time: " + count;
    if(count <= 0){
        clearInterval(timeInterval);
    }
}, 1000);
}

function startGame(){
    displayQuestion(currentQuestion);
}

function displayQuestion(questionIndex){
    question.textContent = holdQuestion[questionIndex].question;
    answers.innerHTML = "";
    correctAnswer = false;

    for (var i = 0; i < holdQuestion[questionIndex].answers.length; i++) {
        var answerItem = document.createElement("li");
        var answerText = holdQuestion[questionIndex].answers[i];
        answerItem.textContent = answerText;
        answerItem.addEventListener("click", function () {
          // Handle user's answer selection
          if (correctAnswer){
            return;
          }

          var selectedAnswer = this.textContent;
          var rightAnswer = holdQuestion[questionIndex].correctAnswer;

          if (selectedAnswer === rightAnswer) {
            correctAnswer = true;
            feedback.textContent = "Correct!";
            // Handle correct answer
          } else {
            // Handle incorrect answer
            feedback.textContent = "Wrong!";
          }

          // Move to the next question
          if (correctAnswer && currentQuestion < holdQuestion.length) {
            currentQuestion++;
            displayQuestion(currentQuestion);
          } else if (correctAnswer && currentQuestion === holdQuestion.length - 1){
            feedback.textContent = "Quiz Is Over"
            // End the quiz as there are no more questions
          }
        });
        
        answers.appendChild(answerItem);
      }
    }

    var feedback = document.createElement("p");
    document.body.appendChild(feedback);

    