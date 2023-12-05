// get reference to the input field
const newTodoInput = document.getElementById('newTodoInput');
const list = document.getElementById('list');

function renderList() {
  list.innerHTML = '';

  todolist.forEach(function (item) {
    const li = document.createElement('li');

    const div = document.createElement('div');
    div.className = 'view';

    const toggleInput = document.createElement('input');
    toggleInput.className = 'toggle';
    toggleInput.type = 'checkbox';
    toggleInput.checked = item.completed;

    toggleInput.addEventListener('change', function () {
      toggleTask(item.id);
      renderList();
    });

    const label = document.createElement('label');
    label.textContent = item.title;

    const button = document.createElement('button');
    button.className = 'destroy';
    button.addEventListener('click', function () {
          removeTask(item.id);
          renderList();
        }
    );

    div.appendChild(toggleInput);
    div.appendChild(label);
    div.appendChild(button);

    li.appendChild(div);

    const editInput = document.createElement('input');
    editInput.className = 'edit';

    li.appendChild(editInput);
    list.appendChild(li);
  });
}


// Response to user input when they press enter
newTodoInput.addEventListener('keydown', function addItemListener(e) {
      if(e.key === 'Enter') {
        addTask(newTodoInput.value);
        renderList();
      }
    }
);

loadTasksFromApi()
  .then(renderList);





