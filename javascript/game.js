var shapes = ["circle", "diamond", "star", "heart", "four_point", "triangle"];
var list1 = new Array();
var list2 = new Array();
var n = 1;
var m = -1;
var el = new Array();
var score = 0;

$("#playBtn").click(function () {
    list1 = new Array();
    list2 = new Array();
    list1[0] = shapes[Math.floor(Math.random() * 6)];
    n = 1;
    m = -1;
    el = new Array();
    score = 0;
    return;
});

function play() {
    setTimeout(game, 500);
}

function game() {
    list2 = [];
    console.log(list1, list2, n, m, el, score);
    
    list1[n] = shapes[Math.floor(Math.random() * 6)];
    n += 1;
    
    list1[n] = shapes[Math.floor(Math.random() * 6)];
    n += 1;
    
    for (i = 0; i < list1.length; i++) {
        console.log(list1[i]);
        el[i] = document.getElementById(list1[i]);
        setTimeout(on, 500 + (1000*i), el[i]);
        setTimeout(off, 1000 + (1000*i), el[i]);
    }
    
    setTimeout(go, 500 + 1000*list1.length)
}

function pressShape(id) {
    m += 1;
    on(document.getElementById(id));
    setTimeout(off, 500, document.getElementById(id));
    list2[m] = id;
    if (list2[m] == list1[m]) {
        score += 10*(1+(list1.length/10));
        $(".score #num").html(score);
        if (list2.length == list1.length) {
            play();
            m = -1;
        }
    } else {
        gameOver(score);
    }
}

function on(element) {
    element.classList.remove("off");
}

function off(element) {
    element.classList.add("off");
}

function go() {
    $("#goBox").show();
    setTimeout(hide, 300);
}

function hide() {
    $("#goBox").hide();
}