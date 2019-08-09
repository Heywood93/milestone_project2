
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
    console.log(shape)
    var el = document.getElementById(shape);
    el.classList.remove("off");
    setTimeout(on, 1000);
};
function on() {
    el.classList.add("off");
}