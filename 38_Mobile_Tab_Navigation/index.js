'use strict'

const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

// first approach

// O(n) Time | O(1) Space
const hideAllContents = () =>
  contents.forEach((item) => item.classList.remove('show'))

// O(n) Time | O(1) Space
const hideAllItems = () =>
  listItems.forEach((item) => item.classList.remove('active'))

// O(n) Time | O(1) Space
listItems.forEach((item, idx) => {
  item.addEventListener('click', (e) => {
    hideAllContents()
    hideAllItems()

    item.classList.add('active')
    contents[idx].classList.add('show')
  })
})

// Total O(n^2) Time | O(1) Space
