const main = document.getElementById("main")
const formEl = document.getElementById("form")
const search = document.getElementById("search")

const BASE_URL = "https://api.github.com/users"

async function getUser(username) {
  try {
    const { data } = await axios.get(`${BASE_URL}/${username}`)
    createUserCard(data)
    getRepos(username)
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard("No profile with this username")
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios.get(`${BASE_URL}/${username}/repos?sort=created`)
    addReposToCard(data)
  } catch (err) {
    console.log(err)
    createErrorCard("Problem fetching repos")
  }
}

function createUserCard(user) {
  const cardHTML = `
    <div class="card">
      <div>
        <img src="${user.avatar_url}" alt="${user.username}" class="avatar" />
      </div>

      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio || ""}</p>

        <ul>
          <li>${user.followers} <strong>Followers</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos"></div>
      </div>
    </div>
  `

  main.innerHTML = cardHTML
}

function createErrorCard(message) {
  const cardHTML = `
    <div class="card">
      <h1>${message}</h1>
    </div>
  `

  main.innerHTML = cardHTML
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos")

  repos.slice(0, 8).forEach(repo => {
    reposEl.innerHTML += `<a href="${repo.html_url}" class="repo">${repo.name}</a>`
  })
}

function handleSubmit(e) {
  e.preventDefault()
  const user = search.value

  if (user) {
    getUser(user)
    search.value = ""
  }
}

formEl.addEventListener("submit", handleSubmit)
