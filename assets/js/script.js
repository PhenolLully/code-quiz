var timer = document.querySelector("#timer");
var count = 60;
var question = document.querySelector("#question")
var currentQuestion = 0;
var holdQuestion = [
{
    question: "Which one is a tag selector?", 
    answers: ["?", "$", ".", "<p>"],
    answerKey: "<p>"

},
{
    question: "Which one is a tag selector?", 
    answers: ["?", "$", ".", "<p>"],
    answerKey: "<p>"
    
},
{
    question: "Which one is a tag selector?", 
    answers: ["?", "$", ".", "<p>"],
    answerKey: "<p>"
    
},
{
    question: "Which one is a tag selector?", 
    answers: ["?", "$", ".", "<p>"],
    answerKey: "<p>"
    
}
]           

function myTimer(){
  var timeInterval = setInterval(function(){
    count--;
    timer.textContent = count;
    if(count <= 0){
        clearInterval(timeInterval);
    }
  },1000);

}

myTimer();


function startGame(){
    question.textContent = holdQuestion[0].question;
}


function nextQuestion(){
    currentQuestion++
}