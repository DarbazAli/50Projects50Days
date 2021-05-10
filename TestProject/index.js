'use strict'
/* 
    CIRCLE OBJECT
*/

const app = document.getElementById('app')

const circle = document.createElement('input')
circle.setAttribute('type', 'button')

const styles = `
    width: 65px;
    height: 65px;
    background-color: #F77436;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    border: 1px solid #fff;
    font-size: 54px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    opacity: 0.99;
    text-shadow: 0px 4px 11px rgba(255, 112, 46, 0.6);
    font-family: inherit;
    transition: all 300ms ease;
`

class Circle {
  constructor(value, x, y) {
    this.circle = circle
    this.value = value
    this.x = x
    this.y = y
    this.circle.setAttribute('style', styles)
    this.circle.style.top = this.y + 'px'
    this.circle.style.left = this.x + 'px'
    this.circle.setAttribute('value', this.value)
  }

  move(x, y) {
    setInterval(() => {
      console.log(this.x, this.y)
      this.x++
      this.y++
      this.circle.style.transform = `translate(${this.x}px, ${this.y}px)`
    }, 100)
  }
}

const c0 = new Circle(0, 100, 100)

app.appendChild(c0.circle)
