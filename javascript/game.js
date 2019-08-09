var shapes = ["circle","diamond","star","heart","four_point","triangle"];
var list1 = new Array();
var n = 0;
var el = new Array();

function on(element) {
    element.classList.remove("off");
}
function off(element) {
    element.classList.add("off");
}

list1[n] = shapes[Math.floor(Math.random() * 6)];

n += 1;
list1[n] = shapes[Math.floor(Math.random() * 6)];
n += 1;
list1[n] = shapes[Math.floor(Math.random() * 6)];
n += 1;
list1[n] = shapes[Math.floor(Math.random() * 6)];
n += 1;
list1[n] = shapes[Math.floor(Math.random() * 6)];
n += 1;
list1[n] = shapes[Math.floor(Math.random() * 6)];
n += 1;
list1[n] = shapes[Math.floor(Math.random() * 6)];

for(i=0; i < list1.length; i++) {
    console.log(list1[i])
    el[i] = document.getElementById(list1[i]);
    setTimeout(on, 1500 * (i+1), el[i]);
    setTimeout(off, 1500 * (i+1) + 1500, el[i]);
}