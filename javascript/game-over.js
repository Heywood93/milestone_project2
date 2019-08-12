$(document).ready(function () {
    $("#game-over").hide();
});

function gameOver(num) {
    $("#game-over").show();
    $("#message .score").html(num);
}

$("#closeBtn").click(function () {
    $("#game-over").hide();
});