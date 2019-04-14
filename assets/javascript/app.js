$(document).ready(function(){

var questions = ["Question 1", "Question 2", "Question 3"];
var choices = [["Answeer 1", "Answer 2", "answer 3", "Answer 4"], ["Answeer 1", "answer 2", "Answer 3", "Answer 4"],["Answeer 1", "Answer 2", "answer 3", "Answer 4"], ["Answeer 1", "Answer 2", "answer 3", "Answer 4"]];
var qIndex = 0;
var time=3;
var countdown;

function startGame() {
    $("#question").html(questions[qIndex]);
    $("#choices").empty();
    countdown = setInterval(timer, 1000);
    $.each(choices[qIndex], function(index, value){
        var div = $("<div>");
        div.attr("number", index);
        div.text(value);
        $("#choices").append(div);
        $("#timer").text(time+ " seconds left to answer.");
        
    }) 
};
startGame()

function timer(){
    $("#timer").text(time+ " seconds left to answer.")
    time--;
    if (time === 0) {
        time=3;
        qIndex++;
        $("#question").html(questions[qIndex]);
        $("#choices").empty();
        $.each(choices[qIndex], function(index, value){
        var div = $("<div>");
        div.attr("number", index);
        div.text(value);
        $("#choices").append(div);
        $("#timer").text(time+ " seconds left to answer.");
        }) 
        console.log(qIndex, questions.length);     
        endGame();    
    }
};

function endGame() {
    if (qIndex === questions.length){
        clearInterval(countdown);
        $("#choices").empty();
        $("#question").empty();
        $("#timer").empty();
        console.log("game ended")
    }
}
})