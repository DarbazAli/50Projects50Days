'use strict'

const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUl = document.getElementById('todos')

// syncronize localStorage
const updateLS = () => {
  const todosEl = document.querySelectorAll('li')

  const todos = []

  todosEl.forEach((todo) => {
    todos.push({
      text: todo.innerText,
      completed: todo.classList.contains('completed'),
    })
  })

  localStorage.setItem('todos', JSON.stringify(todos))
}

const addTodo = (todo) => {
  let todoText = input.value

  if (todo) {
    todoText = todo.text
  }

  if (todoText) {
    const todoEl = document.createElement('li')

    if (todo && todo.completed) {
      todoEl.classList.add('completed')
    }

    todoEl.innerText = todoText

    // make todo completed
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed')
      updateLS()
    })

    // remove element with Right click
    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault()

      todoEl.remove()

      updateLS()
    })

    todosUl.appendChild(todoEl)
    // clear input
    input.value = ''

    updateLS()
  }
}

// get todos from localStorage
const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
  todos.forEach((todo) => addTodo(todo))
}

// eventListener for the form
form.addEventListener('submit', (e) => {
  e.preventDefault()

  addTodo()
})
