$(document).ready(function() {
    $("#highscores").hide();
    $("#highscoresBtn").click(function() {
        showScores();
        $("#highscores").slideToggle("slow");
    });
});

var highscores = [
    [0, ""],
    [150, ""],
    [200, ""],
    [250, ""],
    [300, ""],
    [350, ""],
    [450, ""],
    [400, ""],
    [550, ""],
    [500, ""],
    [600, ""]
];

function compareScore(score) {
    $("#game-over").hide();

    var playerName = document.getElementById("playerName").value;
    highscores[10][0] = score;
    highscores[10][1] = playerName;
    highscores.sort();
    showScores();
    
    $("#highscores").slideDown("slow");
}

function showScores() {
    $("#firstPlayer").html(highscores[10][1]);
    $("#firstScore").html(highscores[10][0]);
    $("#secondPlayer").html(highscores[9][1]);
    $("#secondScore").html(highscores[9][0]);
    $("#thirdPlayer").html(highscores[8][1]);
    $("#thirdScore").html(highscores[8][0]);
    $("#fourthPlayer").html(highscores[7][1]);
    $("#fourthScore").html(highscores[7][0]);
    $("#fifthPlayer").html(highscores[6][1]);
    $("#fifthScore").html(highscores[6][0]);
    $("#sixthPlayer").html(highscores[5][1]);
    $("#sixthScore").html(highscores[5][0]);
    $("#seventhPlayer").html(highscores[4][1]);
    $("#seventhScore").html(highscores[4][0]);
    $("#eighthPlayer").html(highscores[3][1]);
    $("#eighthScore").html(highscores[3][0]);
    $("#ninthPlayer").html(highscores[2][1]);
    $("#ninthScore").html(highscores[2][0]);
    $("#tenthPlayer").html(highscores[1][1]);
    $("#tenthScore").html(highscores[1][0]);
}
