const search = document.querySelector(".search")
const btn = document.querySelector(".btn")
const input = document.querySelector('.input')

const handleClick = () => {
  search.classList.toggle("active")
  input.focus()
}

btn.addEventListener("click", handleClick)
