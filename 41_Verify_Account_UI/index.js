'use strict'

const codes = document.querySelectorAll('.code')

// focust first input
codes[0].focus()

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      // remove current value on keydown
      codes[idx].value = ''
      setTimeout(() => codes[idx + 1].focus(), 10)
    } else if (e.key === 'Backspace') {
      setTimeout(() => codes[idx - 1].focus(), 10)
    }
  })
})
