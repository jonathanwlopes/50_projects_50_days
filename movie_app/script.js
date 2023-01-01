/* The access key is public, used in the course: https://www.udemy.com/course/50-projects-50-days */
const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c"

const API_URL = `https://api.themoviedb.org/3`
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
const SEARCH_URL = `${API_URL}/search/movie?api_key=${API_KEY}&query="`
const DISCOVER_URL = `${API_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`

const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")

/* GET INITIAL MOVIES */
getMovies(DISCOVER_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  showMovies(data.results)
}

function showMovies(movies) {
  main.innerHTML = ""

  movies.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movie

    main.innerHTML += /* HTML */ `
      <div class="movie">
        <img src="${IMG_PATH + poster_path}" alt=${title} />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class=${getClassByRate(vote_average)}>${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
      </div>
    `
  })
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green"
  } else if (vote >= 5) {
    return "orange"
  } else {
    return "red"
  }
}

form.addEventListener("submit", e => {
  e.preventDefault()

  const searchTerm = search.value

  if (searchTerm && searchTerm !== "") {
    getMovies(`${SEARCH_URL}${searchTerm}`)
    search.value = ""
  } else {
    window.location.reload()
  }
})
