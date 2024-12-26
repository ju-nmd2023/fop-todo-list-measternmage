let width = 1000;
let height = 1000;
let tasks = []; 
let inputBox, addButton;
let checkButtonX = 750;
let deleteButtonX = 800; 

function setup() {
  createCanvas(width, height);
  background(150);

  inputBox = createInput();
  inputBox.position(500, 800);

  addButton = createButton('Add Task');
  addButton.position(700, 800);
  addButton.mousePressed(addTask);

  loadTasks();

  textAlign(LEFT, TOP);
  textSize(24);
}

function displayTasks() {
  let startY = 60;
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    if (task.isCompleted) {
      fill(0, 255, 0);
    } else {
      fill(0); 
    }

    text((i + 1) + '. ' + task.text, 500, startY + i * 30);
    fill(0); 
    text('✔', checkButtonX, startY + i * 30 + 8); 
    text('X', deleteButtonX, startY + i * 30 + 8); 
  }
}

function addTask() {
  let task = inputBox.value();
  if (task) {
    tasks.push({ text: task, isCompleted: false });
    inputBox.value(''); 
    saveTasks();
  }
}

function markAsCompleted(index) {
  tasks[index].isCompleted = true;
  saveTasks(); 
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks(); 
}

function mousePressed() {
  let startY = 50; 
  for (let i = 0; i < tasks.length; i++) {
    let taskY = startY + i * 30;

    if (mouseX > 750 && mouseX < 770 && mouseY > taskY && mouseY < taskY + 30) {
      markAsCompleted(i);
    }

    if (mouseX > 800 && mouseX < 820 && mouseY > taskY && mouseY < taskY + 30) {
      deleteTask(i);
    }
  }
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks)); 
}

function loadTasks() {
  let savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    tasks = JSON.parse(savedTasks); 
  }
}

function draw() {
  background(150); 
  displayTasks();  
}
