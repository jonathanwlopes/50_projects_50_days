const jokeEl = document.querySelector("#joke")
const jokeBtn = document.querySelector("#jokeBtn")

const generateJoke = async () => {
  const url = "https://icanhazdadjoke.com"
  const config = {
    headers: {
      Accept: "application/json",
    },
  }

  const res = await fetch(url, config)
  const data = await res.json()

  if (!data.joke || !res.ok) {
    jokeEl.innerHTML = "Try again!"
    return
  }

  jokeEl.innerHTML = data.joke
}

jokeBtn.addEventListener("click", () => {
  generateJoke()
})

generateJoke()
