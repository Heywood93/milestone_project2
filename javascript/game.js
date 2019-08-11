var shapes = ["circle", "diamond", "star", "heart", "four_point", "triangle"];
var list1 = new Array();
var list2 = new Array();
var n = 0;
var m = -1;
var el = new Array();
var score = 0;

function play() {
    list2= [];
    
    list1[n] = shapes[Math.floor(Math.random() * 6)];
    n += 1;
    
    for (i = 0; i < list1.length; i++) {
        console.log(list1[i]);
        el[i] = document.getElementById(list1[i]);
        setTimeout(on, 1500 * (i + 1), el[i]);
        setTimeout(off, 1500 * (i + 1) + 1500, el[i]);
    }
}

function pressShape(id) {
    m += 1
    on(document.getElementById(id))
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
        console.log(gameOver(score));
        gameOver(score);
    }
}

function on(element) {
    element.classList.remove("off");
}

function off(element) {
    element.classList.add("off");
}