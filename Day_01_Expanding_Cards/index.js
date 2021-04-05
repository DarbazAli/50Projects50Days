// alert('Hello World')

// get all panels with class "panel"
const panels = document.querySelectorAll('.panel')

// remove "active" class from all panel elements
const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}

// add click event to all panels
// when a panel is clicked, the .active class will be added to this panel
panels.forEach((panel) => {
  panel.addEventListener('click', (e) => {
    // remove .active class from all panels
    removeActiveClasses()
    panel.classList.add('active')
  })
})
