$(document).ready(function () {
    $("#highscores").hide();
    $("#highscoresBtn").click(function() {
        $("#highscores").slideToggle("slow");
    });
});