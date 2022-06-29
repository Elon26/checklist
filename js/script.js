"use strict"

// Домашка

// Задание 1.
/*
// Вариант "через innerHTML"
document.body.innerHTML = `
<form class="create-user-form">
	<label>
		Имя
		<input type="text" name="userName" placeholder="Введите ваше имя">
	</label>
	<label>
		Пароль
		<input type="password" name="password" placeholder="Придумайте Пароль">
	</label>
	<button type="submit">
		Подтвердить
	</button>
</form>
`

// Вариант "через document.createElement()"
const body = document.body

const form = document.createElement('form')
form.className = 'create-user-form'
body.append(form)

const firstLabel = document.createElement('label')
firstLabel.innerText = 'Имя '
form.append(firstLabel)

const firstInput = document.createElement('input')
firstInput.type = 'text'
firstInput.name = 'userName'
firstInput.placeholder = 'Введите ваше имя'
firstLabel.append(firstInput)

const secondLabel = document.createElement('label')
secondLabel.innerText = ' Пароль '
form.append(secondLabel)

const secondInput = document.createElement('input')
secondInput.type = 'password'
secondInput.name = 'password'
secondInput.placeholder = 'Придумайте Пароль'
secondLabel.append(secondInput)

const space = document.createElement('span')
space.innerText = ' '
form.append(space)

const button = document.createElement('button')
button.type = 'submit'
button.innerText = 'Подтвердить'
form.append(button)
*/

// -------------------------------------------------------------

// Задание 2.
/*
const tasks = [
	{
		id: '1138465078061',
		completed: false,
		text: 'Посмотреть новый урок по JavaScript'
	},
	{
		id: '1138465078062',
		completed: false,
		text: 'Выполнить тест после урока'
	},
	{
		id: '1138465078063',
		completed: false,
		text: 'Выполнить ДЗ после урока'
	}
]

const taskList = document.querySelector('.tasks-list')

tasks.forEach(task => {
	const outer = document.createElement('div')
	outer.className = 'task-item'
	outer.dataset.taskId = task.id
	taskList.append(outer)

	const container = document.createElement('div')
	container.className = 'task-item__main-container'
	outer.append(container)

	const content = document.createElement('div')
	content.className = 'task-item__main-content'
	container.append(content)

	const form = document.createElement('form')
	form.className = 'checkbox-form'
	content.append(form)

	const input = document.createElement('input')
	input.className = 'checkbox-form__checkbox'
	input.type = 'checkbox'
	input.id = `task-${task.id}`
	input.checked = task.completed
	form.append(input)

	const label = document.createElement('label')
	label.htmlFor = `task-${task.id}`
	form.append(label)

	const span = document.createElement('span')
	span.className = 'task-item__text'
	span.textContent = task.text
	content.append(span)

	const button = document.createElement('button')
	button.className = 'task-item__delete-button default-button delete-button'
	button.dataset.deleteTaskId = '5'
	button.textContent = 'Удалить'
	container.append(button)
})
*/

// -------------------------------------------------------------

// Задание 3.
/*
const tasks = [
	{
		id: '1138465078061',
		completed: false,
		text: 'Посмотреть новый урок по JavaScript'
	},
	{
		id: '1138465078062',
		completed: false,
		text: 'Выполнить тест после урока'
	},
	{
		id: '1138465078063',
		completed: false,
		text: 'Выполнить ДЗ после урока'
	}
]

const createTask = task => {
	const taskList = document.querySelector('.tasks-list')

	const outer = document.createElement('div')
	outer.className = 'task-item'
	outer.dataset.taskId = task.id
	taskList.append(outer)

	const container = document.createElement('div')
	container.className = 'task-item__main-container'
	outer.append(container)

	const content = document.createElement('div')
	content.className = 'task-item__main-content'
	container.append(content)

	const form = document.createElement('form')
	form.className = 'checkbox-form'
	content.append(form)

	const input = document.createElement('input')
	input.className = 'checkbox-form__checkbox'
	input.type = 'checkbox'
	input.id = `task-${task.id}`
	input.checked = task.completed
	form.append(input)

	const label = document.createElement('label')
	label.htmlFor = `task-${task.id}`
	form.append(label)

	const span = document.createElement('span')
	span.className = 'task-item__text'
	span.textContent = task.text
	content.append(span)

	const button = document.createElement('button')
	button.className = 'task-item__delete-button default-button delete-button'
	button.dataset.deleteTaskId = '5'
	button.textContent = 'Удалить'
	container.append(button)
}

tasks.forEach(task => {
	createTask(task)
})

const createTaskForm = document.querySelector('.create-task-block')
createTaskForm.addEventListener('submit', e => {
	e.preventDefault()
	const inputValue = createTaskForm.taskName.value.trim()

	if (inputValue) {
		const newTask = {
			id: String(Date.now()),
			completed: false,
			text: inputValue
		}

		tasks.push(newTask)
		createTask(newTask)
	}
})
*/

// -------------------------------------------------------------

// Задание 4.
/*
const tasks = [
	{
		id: '1138465078061',
		completed: false,
		text: 'Посмотреть новый урок по JavaScript'
	},
	{
		id: '1138465078062',
		completed: false,
		text: 'Выполнить тест после урока'
	},
	{
		id: '1138465078063',
		completed: false,
		text: 'Выполнить ДЗ после урока'
	}
]

const createTask = task => {
	const taskList = document.querySelector('.tasks-list')

	const outer = document.createElement('div')
	outer.className = 'task-item'
	outer.dataset.taskId = task.id
	taskList.append(outer)

	const container = document.createElement('div')
	container.className = 'task-item__main-container'
	outer.append(container)

	const content = document.createElement('div')
	content.className = 'task-item__main-content'
	container.append(content)

	const form = document.createElement('form')
	form.className = 'checkbox-form'
	content.append(form)

	const input = document.createElement('input')
	input.className = 'checkbox-form__checkbox'
	input.type = 'checkbox'
	input.id = `task-${task.id}`
	input.checked = task.completed
	form.append(input)

	const label = document.createElement('label')
	label.htmlFor = `task-${task.id}`
	form.append(label)

	const span = document.createElement('span')
	span.className = 'task-item__text'
	span.textContent = task.text
	content.append(span)

	const button = document.createElement('button')
	button.className = 'task-item__delete-button default-button delete-button'
	button.dataset.deleteTaskId = '5'
	button.textContent = 'Удалить'
	container.append(button)
}

tasks.forEach(task => {
	createTask(task)
})

const createTaskForm = document.querySelector('.create-task-block')

createTaskForm.addEventListener('submit', e => {
	e.preventDefault()

	const inputValue = createTaskForm.taskName.value.trim()
	const checkList = tasks.map(task => task = task.text)
	const checkResult = checkList.some(checkItem => checkItem.toLowerCase() === inputValue.toLowerCase())
	const fiascoMessage = createTaskForm.querySelector('.error-message-block')

	if (fiascoMessage) {
		fiascoMessage.remove()
	}

	if (inputValue && !checkResult) {
		const newTask = {
			id: String(Date.now()),
			completed: false,
			text: inputValue
		}
		tasks.push(newTask)
		createTask(newTask)
	} else {
		const fiasco = document.createElement('span')
		fiasco.className = 'error-message-block'
		if (inputValue) {
			fiasco.textContent = 'Задача с таким названием уже существует.'
		} else {
			fiasco.textContent = 'Название задачи не должно быть пустым.'
		}
		createTaskForm.append(fiasco)
	}
})
*/

// -------------------------------------------------------------


// Задание 5.
/*
const taskList = document.querySelector('.tasks-list')

const tasks = [
	{
		id: '1138465078061',
		completed: false,
		text: 'Посмотреть новый урок по JavaScript'
	},
	{
		id: '1138465078062',
		completed: false,
		text: 'Выполнить тест после урока'
	},
	{
		id: '1138465078063',
		completed: false,
		text: 'Выполнить ДЗ после урока'
	}
]

const createTask = task => {
	const outer = document.createElement('div')
	outer.className = 'task-item'
	outer.dataset.taskId = task.id
	taskList.append(outer)

	const container = document.createElement('div')
	container.className = 'task-item__main-container'
	outer.append(container)

	const content = document.createElement('div')
	content.className = 'task-item__main-content'
	container.append(content)

	const form = document.createElement('form')
	form.className = 'checkbox-form'
	content.append(form)

	const input = document.createElement('input')
	input.className = 'checkbox-form__checkbox'
	input.type = 'checkbox'
	input.id = `task-${task.id}`
	input.checked = task.completed
	form.append(input)

	const label = document.createElement('label')
	label.htmlFor = `task-${task.id}`
	form.append(label)

	const span = document.createElement('span')
	span.className = 'task-item__text'
	span.textContent = task.text
	content.append(span)

	const button = document.createElement('button')
	button.className = 'task-item__delete-button default-button delete-button'
	button.dataset.deleteTaskId = task.id
	button.textContent = 'Удалить'
	container.append(button)
}

tasks.forEach(task => {
	createTask(task)
})

const createTaskForm = document.querySelector('.create-task-block')

createTaskForm.addEventListener('submit', e => {
	e.preventDefault()

	const inputValue = createTaskForm.taskName.value.trim()
	const checkList = tasks.map(task => task = task.text)
	const checkResult = checkList.some(checkItem => checkItem.toLowerCase() === inputValue.toLowerCase())
	const fiascoMessage = createTaskForm.querySelector('.error-message-block')

	if (fiascoMessage) {
		fiascoMessage.remove()
	}

	if (inputValue && !checkResult) {
		const newTask = {
			id: String(Date.now()),
			completed: false,
			text: inputValue
		}
		tasks.push(newTask)
		createTask(newTask)
	} else {
		const fiasco = document.createElement('span')
		fiasco.className = 'error-message-block'
		if (inputValue) {
			fiasco.textContent = 'Задача с таким названием уже существует.'
		} else {
			fiasco.textContent = 'Название задачи не должно быть пустым.'
		}
		createTaskForm.append(fiasco)
	}
})

const outer = document.createElement('div')
outer.className = 'modal-overlay modal-overlay_hidden'
document.body.append(outer)

const container = document.createElement('div')
container.className = 'delete-modal'
outer.append(container)

const header = document.createElement('h3')
header.className = 'delete-modal__question'
header.textContent = 'Вы действительно хотите удалить эту задачу?'
container.append(header)

const buttons = document.createElement('div')
buttons.className = 'delete-modal__buttons'
container.append(buttons)

const firstButton = document.createElement('button')
firstButton.className = 'delete-modal__button delete-modal__cancel-button'
firstButton.textContent = 'Отмена'
buttons.append(firstButton)

const secondButton = document.createElement('button')
secondButton.className = 'delete-modal__button delete-modal__confirm-button'
secondButton.textContent = 'Удалить'
buttons.append(secondButton)

let taskIdForDelete = ''
taskList.addEventListener('click', e => {
	const { target } = e
	if (target.closest('.delete-button')) {
		taskIdForDelete = target.dataset.deleteTaskId
		outer.classList.remove('modal-overlay_hidden')
	}
})

buttons.addEventListener('click', e => {
	const { target } = e
	if (target.closest('.delete-modal__cancel-button')) {
		outer.classList.add('modal-overlay_hidden')
	}
	if (target.closest('.delete-modal__confirm-button')) {
		const taskIndexForDelete = tasks.findIndex(task => task.id === taskIdForDelete)
		tasks.splice(taskIndexForDelete, 1)
		taskList.querySelector(`[data-task-id="${taskIdForDelete}"]`).remove()
		outer.classList.add('modal-overlay_hidden')
	}
})
*/

// -------------------------------------------------------------

// Задание 6.
/**/
let darkMode = false
const taskList = document.querySelector('.tasks-list')

const tasks = [
	{
		id: '1138465078061',
		completed: false,
		text: 'Посмотреть новый урок по JavaScript'
	},
	{
		id: '1138465078062',
		completed: false,
		text: 'Выполнить тест после урока'
	},
	{
		id: '1138465078063',
		completed: false,
		text: 'Выполнить ДЗ после урока'
	}
]

const createTask = task => {
	const outer = document.createElement('div')
	outer.className = 'task-item'
	outer.dataset.taskId = task.id
	if (darkMode) {
		outer.style.color = '#ffffff'
	}
	taskList.append(outer)

	const container = document.createElement('div')
	container.className = 'task-item__main-container'
	outer.append(container)

	const content = document.createElement('div')
	content.className = 'task-item__main-content'
	container.append(content)

	const form = document.createElement('form')
	form.className = 'checkbox-form'
	content.append(form)

	const input = document.createElement('input')
	input.className = 'checkbox-form__checkbox'
	input.type = 'checkbox'
	input.id = `task-${task.id}`
	input.checked = task.completed
	form.append(input)

	const label = document.createElement('label')
	label.htmlFor = `task-${task.id}`
	form.append(label)

	const span = document.createElement('span')
	span.className = 'task-item__text'
	span.textContent = task.text
	content.append(span)

	const button = document.createElement('button')
	button.className = 'task-item__delete-button default-button delete-button'
	button.dataset.deleteTaskId = task.id
	button.textContent = 'Удалить'
	if (darkMode) {
		button.style.border = '1px solid #ffffff'
	}
	container.append(button)
}

tasks.forEach(task => {
	createTask(task)
})

const createTaskForm = document.querySelector('.create-task-block')

createTaskForm.addEventListener('submit', e => {
	e.preventDefault()

	const inputValue = createTaskForm.taskName.value.trim()
	const checkList = tasks.map(task => task = task.text)
	const checkResult = checkList.some(checkItem => checkItem.toLowerCase() === inputValue.toLowerCase())
	const fiascoMessage = createTaskForm.querySelector('.error-message-block')

	if (fiascoMessage) {
		fiascoMessage.remove()
	}

	if (inputValue && !checkResult) {
		const newTask = {
			id: String(Date.now()),
			completed: false,
			text: inputValue
		}
		tasks.push(newTask)
		createTask(newTask)
	} else {
		const fiasco = document.createElement('span')
		fiasco.className = 'error-message-block'
		if (inputValue) {
			fiasco.textContent = 'Задача с таким названием уже существует.'
		} else {
			fiasco.textContent = 'Название задачи не должно быть пустым.'
		}
		createTaskForm.append(fiasco)
	}

	createTaskForm.taskName.value = ''
})

const outer = document.createElement('div')
outer.className = 'modal-overlay modal-overlay_hidden'
document.body.append(outer)

const container = document.createElement('div')
container.className = 'delete-modal'
outer.append(container)

const header = document.createElement('h3')
header.className = 'delete-modal__question'
header.textContent = 'Вы действительно хотите удалить эту задачу?'
container.append(header)

const buttons = document.createElement('div')
buttons.className = 'delete-modal__buttons'
container.append(buttons)

const firstButton = document.createElement('button')
firstButton.className = 'delete-modal__button delete-modal__cancel-button'
firstButton.textContent = 'Отмена'
buttons.append(firstButton)

const secondButton = document.createElement('button')
secondButton.className = 'delete-modal__button delete-modal__confirm-button'
secondButton.textContent = 'Удалить'
buttons.append(secondButton)

let taskIdForDelete = ''
taskList.addEventListener('click', e => {
	const { target } = e
	if (target.closest('.delete-button')) {
		taskIdForDelete = target.dataset.deleteTaskId
		outer.classList.remove('modal-overlay_hidden')
	}
})

buttons.addEventListener('click', e => {
	const { target } = e
	if (target.closest('.delete-modal__cancel-button')) {
		outer.classList.add('modal-overlay_hidden')
	}
	if (target.closest('.delete-modal__confirm-button')) {
		const taskIndexForDelete = tasks.findIndex(task => task.id === taskIdForDelete)
		tasks.splice(taskIndexForDelete, 1)
		taskList.querySelector(`[data-task-id="${taskIdForDelete}"]`).remove()
		outer.classList.add('modal-overlay_hidden')
	}
})

document.addEventListener('keyup', e => {
	const { key } = e
	if (key === 'Tab') {
		if (darkMode === false) {
			darkMode = true
			document.body.style.background = '#24292E'
			const tasks = taskList.querySelectorAll('.task-item')
			tasks.forEach(task => task.style.color = '#ffffff')
			const buttons = document.querySelectorAll('button')
			buttons.forEach(button => button.style.border = '1px solid #ffffff')
		} else {
			darkMode = false
			document.body.style.background = 'initial'
			const tasks = taskList.querySelectorAll('.task-item')
			tasks.forEach(task => task.style.color = 'initial')
			const buttons = document.querySelectorAll('button')
			buttons.forEach(button => button.style.border = 'none')
		}
	}
})


// -------------------------------------------------------------


