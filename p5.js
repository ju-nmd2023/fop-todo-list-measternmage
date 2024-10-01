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
  addButton.position(700,800);
  addButton.mousePressed(addTask); 

  
  textAlign(LEFT, TOP);
  textSize(24);
  fill(0);
}

function displayTasks() {
    let startY = 50; 
    for (let i = 0; i < tasks.length; i++) {
      text((i + 1) + '. ' + tasks[i], 500, startY + i * 30); 
    }
  }

function addTask() {
  let task = inputBox.value(); 
  if (task) {
    tasks.push(task); 
    inputBox.value(''); 
  }
}
  function draw() {
    background(150); 
    displayTasks(); 
  } 
  
  
