function setup(){
    createCanvas(500, 1000);
    background(255);
    fill(0);
    textSize(30);
    text('To Do List', 200, 100);
}

function listContainer(){
    fill(211,211,211);
   rect(0, 150, 500, 600);
}

function draw(){
    listContainer();
}