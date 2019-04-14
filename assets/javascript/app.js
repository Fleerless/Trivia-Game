$(document).ready(function(){

var questions = [["Question 1", "1"], ["Question 2", "2"], ["Question 3", "3"]];
var choices = [["Answeer 1", "Answer 2", "answer 3", "Answer 4"], ["Answeer 1", "answer 2", "Answer 3", "Answer 4"],["Answeer 1", "Answer 2", "answer 3", "Answer 4"], ["Answeer 1", "Answer 2", "answer 3", "Answer 4"]];
var qIndex = 0;
var time=3;
var countdown;
var correct = 0;
var wrong = 0;
var clickedAnswer;

function startGame() {
    $("#question").html(questions[qIndex][0]);
    $("#choices").empty();
    countdown = setInterval(timer, 1000);
    $.each(choices[qIndex], function(index, value){
        var div = $("<div>");
        div.attr("number", (index+1));
        div.attr("class", "buttons");
        div.text(value);
        $("#choices").append(div);
        $("#timer").text(time+ " seconds left to answer.");
        });
        $(".buttons").click(function(){
            clickedAnswer = $(this).attr("number");
    }) 
};
startGame();

function timer(){
    time--;
    $("#timer").text(time+ " seconds left to answer.")
    endGame();  
    if (time === 0) {
        getScore();
        time=3;
        qIndex++;
        clickedAnswer = "";
        if (qIndex < questions.length){
        $("#question").html(questions[qIndex][0]);
        $("#choices").empty();
        $.each(choices[qIndex], function(index, value){
        var div = $("<div>");
        div.attr("number", (index+1));
        div.attr("class", "buttons");
        div.text(value);
        $("#choices").append(div);
        $("#timer").text(time+ " seconds left to answer.");
        }); 
        $(".buttons").click(function(){
            clickedAnswer = $(this).attr("number");
    });
    }}
};

function endGame() {
    if (qIndex === questions.length){
        clearInterval(countdown);
        $("#choices").empty();
        $("#question").empty();
        $("#timer").empty();
        var winDiv = $("<div>");
        winDiv.text("You got "+correct+ " questions correct!");
        var loseDiv = $("<div>");
        loseDiv.text("You missed " +wrong+ " questions.");
        var restart = $("<button>");
        restart.attr("id", "button")
        restart.text("RESTART")
        $("#score").append(winDiv);
        $("#score").append(loseDiv);
        $("#question").append(restart);
        $("#button").click(function(){
            $("#question").empty();
            $("#score").empty();
            qIndex=0;
            correct=0;
            wrong=0;
            startGame();
        })
}
};
function getScore(){
    if (clickedAnswer === questions[qIndex][1]){
        correct++
    } else {
        wrong++;
    }
    };
})