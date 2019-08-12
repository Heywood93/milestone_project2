$(document).ready(function () {
    $("#highscores").hide();
    $("#highscoresBtn").click(function() {
        $("#highscores").toggle("slow");
    });
});