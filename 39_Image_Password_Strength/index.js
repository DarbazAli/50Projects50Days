'use strict'

const password = document.getElementById('password')
const background = document.getElementById('background')
const p_strength = document.getElementById('password-strength')

password.addEventListener('input', (e) => {
  const input = e.target.value
  const len = input.length
  const blurValue = 20 - len * 2
  background.style.filter = `blur(${blurValue}px)`

  let p_strength_value = len * 5
  let bgcolor = 'red'

  if (p_strength_value >= 100) {
    p_strength_value = 100
  }

  console.log(len)
  if (len >= 15) {
    bgcolor = 'green'
  } else if (len >= 8) {
    bgcolor = 'orange'
  } else {
    bgcolor = 'red'
  }

  p_strength.style.width = `${p_strength_value}%`
  p_strength.style.backgroundColor = bgcolor
})
