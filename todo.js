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
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      if (task.done) li.classList.add('done');
  
      const span = document.createElement('span');
      span.textContent = task.text;
      span.onclick = () => toggleTask(index);
  
      const delBtn = document.createElement('button');
      delBtn.textContent = "Delete";
      delBtn.onclick = () => deleteTask(index);
  
      li.appendChild(span);
      li.appendChild(delBtn);
      list.appendChild(li);
    });
  }
  
  function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    renderTasks();
  }
  
  function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
  }
  