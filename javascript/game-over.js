$(document).ready(function () {
    $("#game-over").hide();
});

function gameOver(num) {
    $("#game-over").show();
    $("#message .score").html(num);
}

function close() {
    $("#game-over").hide();
    console.log($("#game-over").hide());
}