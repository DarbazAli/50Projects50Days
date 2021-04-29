const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileImg = document.getElementById('profile-img')
const username = document.getElementById('username')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2000)

function getData() {
  header.innerHTML =
    '<img src="https://unsplash.com/photos/Ir49gHhLx1w/download?force=true&w=1920" alt="">'

  title.innerHTML = 'Card Title'

  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam sequi sit id unde. Minus itaque provident suscipit ea minima repudiandae.'

  profileImg.innerHTML =
    '<img src="https://randomuser.me/api/portraits/med/men/45.jpg" alt=""/>'

  username.innerHTML = 'John Doe'
  date.innerHTML = 'Oct 08, 2020'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
