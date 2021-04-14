// alert('Hello World')
// https://icanhazdadjoke.com/

const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

const fetchNewJoke = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  const res = await fetch('https://icanhazdadjoke.com/', config)
  const data = await res.json()
  jokeEl.innerHTML = data.joke
}

fetchNewJoke()

jokeBtn.addEventListener('click', fetchNewJoke)
