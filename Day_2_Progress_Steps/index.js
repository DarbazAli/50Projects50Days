// alert('Hello World')
const progress = document.getElementById('progress')
const preview = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

// length of the cirlces array
const len = circles.length

// current active element
let currentActive = 1

// add event listener to next button
next.addEventListener('click', () => {
  currentActive++

  //   make sure current active do not pass circle length
  if (currentActive > len) {
    // stop propagating
    return
  }
  update()
})

// add event listener to prev button
prev.addEventListener('click', () => {
  currentActive--

  //   make sure current active do not pass circle length
  if (currentActive < 1) {
    // stop propagating
    return
  }
  update()
})

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  // get all items with .active class
  const actives = document.querySelectorAll('.active').length

  //   change the progress bar dynamicly
  progress.style.width = ((actives - 1) / (len - 1)) * 100 + '%'

  //   check current active
  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === len) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
