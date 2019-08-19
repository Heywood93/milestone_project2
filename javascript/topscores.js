$(document).ready(function() {
    $(".topscore").hide();
    $("#topscores").hide();
    $("#topscoresBtn").click(function() {
        showScores();
        $("#topscores").slideToggle("slow");
    });
});

var topscores = [
    [0, ""],
    [0, ""],
    [0, ""],
    [0, ""],
    [0, ""],
    [0, ""],
    [0, ""],
    [0, ""],
    [0, ""],
    [0, ""],
    [0, ""]
];

function compareScore(score) {
    $("#game-over").hide();

    var playerName = document.getElementById("playerName").value;
    topscores[0][0] = score;
    topscores[0][1] = playerName;

    for (i = 0; i < 10; i++) {
        if (topscores[i][0] > topscores[i + 1][0]) {
            var number = topscores[i + 1][0];
            var name = topscores[i + 1][1];
            topscores[i + 1][0] = topscores[i][0];
            topscores[i + 1][1] = topscores[i][1];
            topscores[i][0] = number;
            topscores[i][1] = name;
            console.log(topscores);
        }
    }
    showScores();

    $("#topscores").slideDown("slow");
}

function showScores() {
    $("#firstPlayer").html(topscores[10][1]);
    $("#firstScore").html(topscores[10][0]);
    $("#secondPlayer").html(topscores[9][1]);
    $("#secondScore").html(topscores[9][0]);
    $("#thirdPlayer").html(topscores[8][1]);
    $("#thirdScore").html(topscores[8][0]);
    $("#fourthPlayer").html(topscores[7][1]);
    $("#fourthScore").html(topscores[7][0]);
    $("#fifthPlayer").html(topscores[6][1]);
    $("#fifthScore").html(topscores[6][0]);
    $("#sixthPlayer").html(topscores[5][1]);
    $("#sixthScore").html(topscores[5][0]);
    $("#seventhPlayer").html(topscores[4][1]);
    $("#seventhScore").html(topscores[4][0]);
    $("#eighthPlayer").html(topscores[3][1]);
    $("#eighthScore").html(topscores[3][0]);
    $("#ninthPlayer").html(topscores[2][1]);
    $("#ninthScore").html(topscores[2][0]);
    $("#tenthPlayer").html(topscores[1][1]);
    $("#tenthScore").html(topscores[1][0]);

    if (topscores[9][0] > 0) {
        $("#second").show();
    }
    if (topscores[8][0] > 0) {
        $("#third").show();
    }
    if (topscores[7][0] > 0) {
        $("#fourth").show();
    }
    if (topscores[6][0] > 0) {
        $("#fifth").show();
    }
    if (topscores[5][0] > 0) {
        $("#sixth").show();
    }
    if (topscores[4][0] > 0) {
        $("#seventh").show();
    }
    if (topscores[3][0] > 0) {
        $("#eighth").show();
    }
    if (topscores[2][0] > 0) {
        $("#ninth").show();
    }
    if (topscores[1][0] > 0) {
        $("#tenth").show();
    }
}
