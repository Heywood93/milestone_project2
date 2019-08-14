$(document).ready(function () {
    $("#highscores").hide();
    $("#highscoresBtn").click(function() {
        showScores();
        $("#highscores").slideToggle("slow");
    });
});

var highscores = [[["#"],[4000]],
                [["#"],[3500]],
                [["#"],[3000]],
                [["#"],[2500]],
                [["#"],[2000]],
                [["#"],[1500]],
                [["#"],[1000]],
                [["#"],[800]],
                [["#"],[600]],
                [["#"],[400]]];

function compareScore(score) {
    
    $("#game-over").hide();
    
    var playerName = document.getElementById("playerName").value;

    for (i = 0; i < 10; i++) {
        if (score > highscores[i][1]) {
                for (j = 9; j > i; j--) {
                    localStorage.setItem(highscores[j][1], highscores[j-1][1]);
                    localStorage.setItem(highscores[j][0], highscores[j-1][0]);
                }
                localStorage.setItem(highscores[i][1], score);
                localStorage.setItem(highscores[i][0], playerName);
        } else if (score == highscores[i][1] && playerName != highscores[i][0]) {
            for (j = 9; j > i-1; j--) {
                    localStorage.setItem(highscores[j][1], highscores[j-1][1]);
                    localStorage.setItem(highscores[j][0], highscores[j-1][0]);
                }
                localStorage.setItem(highscores[i-1][1], score);
                localStorage.setItem(highscores[i-1][0], playerName);
        }
    }
    showScores();
    $("#highscores").slideDown("slow");
}
function showScores() {
    $("#firstPlayer").html(highscores[0][0]);
    $("#firstScore").html(highscores[0][1]);
    $("#secondPlayer").html(highscores[1][0]);
    $("#secondScore").html(highscores[1][1]);
    $("#thirdPlayer").html(highscores[2][0]);
    $("#thirdScore").html(highscores[2][1]);
    $("#fourthPlayer").html(highscores[3][0]);
    $("#fourthScore").html(highscores[3][1]);
    $("#fifthPlayer").html(highscores[4][0]);
    $("#fifthScore").html(highscores[4][1]);
    $("#sixthPlayer").html(highscores[5][0]);
    $("#sixthScore").html(highscores[5][1]);
    $("#seventhPlayer").html(highscores[6][0]);
    $("#seventhScore").html(highscores[6][1]);
    $("#eighthPlayer").html(highscores[7][0]);
    $("#eighthScore").html(highscores[7][1]);
    $("#ninthPlayer").html(highscores[8][0]);
    $("#ninthScore").html(highscores[8][1]);
    $("#tenthPlayer").html(highscores[9][0]);
    $("#tenthScore").html(highscores[9][1]);
}