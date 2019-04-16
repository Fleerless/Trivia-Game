$(document).ready(function(){

var questions = [["2+2= ?", "1"], ["What is the name of Jim Carey's character in the movie 'Dumb and Dumber'?", "2"], ["Which song did Nickleback sing", "3"]];
var choices = [["4", "2", "3", "1"], ["Harry Dunne", "Lloyd Christmas", "Sea Bass", "Stanley Ipkiss"],["With Arms Wide Open", "My Generation", "Rockstar", "Mud on the Tires"], ["Answeer 1", "Answer 2", "answer 3", "Answer 4"]];
var qIndex = 0;
var time=5;
var countdown;
var correct = 0;
var wrong = 0;
var clickedAnswer;

var startButton =$("<button>");
startButton.attr("id", "startButton");
startButton.text("START");
$("#choices").append(startButton);
$("#startButton").click(function(){
    startGame();
})

function startGame() {
    $("#final").empty();
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
        var finalButton = $("<div>");
        finalButton.attr("id", "final-button");
        finalButton.addClass("buttons");
        finalButton.text("Final Answer");
        $("#final").click(function(){
            time =1;
        });
        $("#final").append(finalButton);
        $(".buttons").click(function(){
            clickedAnswer = $(this).attr("number");
            $(".buttons").removeClass("clicked");
            $(this).addClass("clicked");
    }) 
};

function timer(){
    time--;
    $("#timer").text(time+ " seconds left to answer.")
    endGame();  
    $("#final-button").removeClass("clicked");
    if (time === 0) {
        getScore();
        time=5;
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
            $(".buttons").removeClass("clicked");
            $(this).addClass("clicked");
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