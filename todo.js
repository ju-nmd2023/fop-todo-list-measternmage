let tasks = [];

function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (text !== "") {
    tasks.push({ text: text, done: false });
    input.value = "";
    renderTasks();
  }
}

function renderTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = task.text;
    li.appendChild(span);
    list.appendChild(li);
  });
}
