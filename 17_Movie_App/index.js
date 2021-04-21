// alert('Hello World')

// https://api.themoviedb.org/3/discover/movie?sort_by=poplularity.desc&api_key=8d3a96a98d055798c0603b2e98749e87&page=1

const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8d3a96a98d055798c0603b2e98749e87&page=1'

const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=8d3a96a98d055798c0603b2e98749e87&query="'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

getMovies(API_URL)

// fetch movies from db with API endpoint
async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()
  showMovies(data.results)
}

// generate movie div dynamicly based on movies array
// moveis is an array pulled out from a random API
function showMovies(movies) {
  main.innerHTML = ''

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie
    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')
    movieEl.innerHTML = `

        <img src='${IMG_PATH + poster_path}' alt="${title}">

        <div class="movie-info">
            <h3>${title}</h3>
            <span class='${getClassByRate(vote_average)}'>${vote_average}</span>
        </div>

        <div class="overview">
            <h3>Overview</h3>

            ${overview}

        </div>

      `

    main.appendChild(movieEl)
  })
}

// generate a class name based on vote value
function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green'
  } else if (vote >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}

// Search Form Event Handler
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const searchTerm = search.value

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_URL + searchTerm)

    search.value = ''
  } else {
    window.location.reload()
  }
})
