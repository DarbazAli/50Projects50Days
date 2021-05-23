'use strict'

const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'

const rows = 10

// generate a random number between 300 - 310
const randomNum = () => Math.floor(Math.random() * 10 + 300)

// generate a random size lie '302x309'
const randomSize = () => `${randomNum()}x${randomNum()}`

for (let i = 0; i < rows * 3; i++) {
  const image = document.createElement('img')
  image.src = `${unsplashURL}${randomSize()}`

  container.appendChild(image)
}
