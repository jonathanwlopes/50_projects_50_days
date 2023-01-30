const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const profile_img = document.getElementById("profile_img")
const profile_name = document.getElementById("name")
const date = document.getElementById("date")

const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bg_texts = document.querySelectorAll(".animated-bg-text")

setTimeout(getDate, 2500)

function getDate() {
  header.innerHTML =
    '<img src="https://picsum.photos/1024/768" alt="Aleatory Image" />'
  title.innerHTML = "Lorem ipsum dolor sit amet."
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, vero!"
  profile_img.innerHTML =
    '<img src="https://picsum.photos/150/150" alt="Aleatory Image" />'
  profile_name.innerHTML = "John Doe"
  date.innerHTML = "Oct 08, 2022"

  animated_bgs.forEach(bg => bg.classList.remove("animated-bg"))
  animated_bg_texts.forEach(bg => bg.classList.remove("animated-bg-text"))
}
