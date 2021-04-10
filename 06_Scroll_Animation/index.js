// alert('Hello World')
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 3

  boxes.forEach((box) => {
    //   where is the top point in the viewport
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
