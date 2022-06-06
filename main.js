window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const listElement = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

        if(!task) {
            alert('Please add a task')
            return;
        }

		const taskItem = document.createElement('div');
		taskItem.classList.add('task');

		const taskContent = document.createElement('div');
		taskContent.classList.add('content');

		taskItem.appendChild(taskContent);

		const taskInput = document.createElement('input');
		taskInput.classList.add('text');
		taskInput.type = 'text';
		taskInput.value = task;
		taskInput.setAttribute('readonly', 'readonly');

		taskContent.appendChild(taskInput);

		const taskActions = document.createElement('div');
		taskActions.classList.add('actions');

		const taskEdit = document.createElement('button');
		taskEdit.classList.add('edit');
		taskEdit.innerText = 'Edit';

		const taskDelete = document.createElement('button');
		taskDelete.classList.add('delete');
		taskDelete.innerText = 'Delete';

		taskActions.appendChild(taskEdit);
		taskActions.appendChild(taskDelete);

		taskItem.appendChild(taskActions);

		listElement.appendChild(taskItem);

		input.value = '';

		taskEdit.addEventListener('click', (e) => {
			if (taskEdit.innerText.toLowerCase() == "edit") {
				taskEdit.innerText = "Save";
				taskInput.removeAttribute("readonly");
				taskInput.focus();
			} else {
				taskEdit.innerText = "Edit";
				taskInput.setAttribute("readonly", "readonly");
			}
		});

		taskDelete.addEventListener('click', (e) => {
			listElement.removeChild(taskItem);
		});
	});
});