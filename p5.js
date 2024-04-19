let inputBox; 
let uploadButton;
let todo = [];
let canvasWidth = 500;
let canvasHeight = 1000;
let textY = 200;
let textX = 50;
let lineHeight = 50;
let checkboxSize = 30;
let customFont;

function setup(){
    createCanvas(canvasWidth, canvasHeight);
    
    background(255);
    inputBox = createInput();
    inputBox.position(canvasWidth + 100, 800);

    uploadButton = createButton('Add');
    uploadButton.position(inputBox.x + inputBox.width + 10, 800);
    uploadButton.mousePressed(addTodo);

    let savedTodo = localStorage.getItem('todo');
    if (savedTodo){
        todo = JSON.parse(savedTodo);
    }

    fill(0);
    textSize(30);
    text('To Do List', 200, 100);
}

function addTodo(){
    let newTodo = inputBox.value();
    if (newTodo.trim() !== '') {
        todo.push({text: newTodo, completed: false});
        inputBox.value('');
        localStorage.setItem('todo', JSON.stringify(todo)); 
    }
}

function listContainer(){
    fill(255);
    rect(0, 150, 500, 600);
}

function draw(){
    listContainer();
    for (let i = 0; i < todo.length; i++) {
        let y = textY + i * lineHeight;
        let checkboxX = textX + textWidth(todo[i].text) + 10;

        // Draw todo text
        fill(todo[i].completed ? color(0, 150, 0) : 0);
        textSize(20);
        text(todo[i].text, textX, y);

        // Draw checkbox
        fill(255);
        stroke(0);
        rect(checkboxX, y - checkboxSize / 2, checkboxSize, checkboxSize);
        if (todo[i].completed) {
            fill(0);
            textSize(20);
            text('✔', checkboxX + 5, y + 5);
        }

        // Draw delete button
        let deleteButtonX = checkboxX + checkboxSize + 10;
        fill(255);
        stroke(0);
        rect(deleteButtonX, y - checkboxSize / 2, checkboxSize, checkboxSize);
        fill(255, 0, 0);
        textSize(20);
        text('❌', deleteButtonX + 5, y + 5);
    }
}

function mouseClicked() {
    for (let i = 0; i < todo.length; i++) {
        let checkboxX = textX + textWidth(todo[i].text) + 10;
        let y = textY + i * lineHeight;

        // Toggle completion
        if (mouseX > checkboxX && mouseX < checkboxX + checkboxSize && mouseY > y - checkboxSize / 2 && mouseY < y + checkboxSize / 2) {
            todo[i].completed = !todo[i].completed;
            localStorage.setItem('todo', JSON.stringify(todo)); 
        }

        // Delete todo
        let deleteButtonX = checkboxX + checkboxSize + 10;
        if (mouseX > deleteButtonX && mouseX < deleteButtonX + checkboxSize && mouseY > y - checkboxSize / 2 && mouseY < y + checkboxSize / 2) {
            todo.splice(i, 1);
            localStorage.setItem('todo', JSON.stringify(todo)); 
        }
    }
}
