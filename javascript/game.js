
var shapes = ["circle","diamond","star","heart","four_point","triangle"];
var list1 = new Array();
var n = 0;

list1[n] = shapes[Math.floor(Math.random() * 6)];

n += 1;
list1[n] = shapes[Math.floor(Math.random() * 6)];
n += 1;
list1[n] = shapes[Math.floor(Math.random() * 6)];

for(i=0; i < list1.length; i++) {

    var shape = list1[i];
    
    console.log(shape);
    
    if (shape == "circle") {
        var el = document.getElementById("circle");
    } else if (shape == "diamond") {
        var el = document.getElementById("diamond");
    } else if (shape == "star") {
        var el = document.getElementById("star");
    } else if (shape == "heart") {
        var el = document.getElementById("heart");
    } else if (shape == "four_point") {
        var el = document.getElementById("four_point");
    } else if (shape == "triangle") {
        var el = document.getElementById("triangle");
    }
    console.log(el);
};