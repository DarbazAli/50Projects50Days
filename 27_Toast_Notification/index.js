const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

// potential messages to show in the notifications
const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four']

// potential types for diffrent notifications
const types = ['info', 'success', 'error']

// pick a random item from an array
const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)]

// create notification function
const createNotification = (message = null, type = null) => {
  // create a div element, add appropirate class name
  const notification = document.createElement('div')
  notification.classList.add('toast')
  notification.classList.add(type ? type : getRandomItem(types))

  notification.innerText = message ? message : getRandomItem(messages)

  // append a notification to the container
  toasts.appendChild(notification)

  // remve notification after 3s
  setTimeout(() => {
    notification.remove()
  }, 3000)
}

button.addEventListener('click', () => createNotification())
