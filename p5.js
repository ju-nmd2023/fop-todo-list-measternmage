let width = 1000;
let height = 1000;
let tasks = []; 
let inputBox, addButton;

function setup() {
  createCanvas(width, height);
  background(150);
  inputBox = createInput();
  inputBox.position(500, 800); 

  addButton = createButton('Add Task');
  addButton.position(700, 800);
  addButton.mousePressed(addTask); 
}

function draw() {
  background(150); 
  displayTasks(); 
} 

function addTask() {
  let task = inputBox.value(); 
  if (task) {
    tasks.push(task); 
    inputBox.value('');
  }
}
