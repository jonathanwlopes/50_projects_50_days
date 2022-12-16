const progress = document.querySelector("#progress")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
const circles = document.querySelectorAll(".circle")

let currentActive = 1
let limitItems = circles.length

const handlePrev = () => {
  currentActive--
  if (currentActive < 1) currentActive = 1

  update()
}

const handleNext = () => {
  currentActive++
  if (currentActive > limitItems) currentActive = limitItems

  update()
}

const manipulateActiveClass = (isActive, el) =>
  isActive ? el.classList.add("active") : el.classList.remove("active")

const manipulateCircles = (circle, idx) =>
  idx < currentActive
    ? manipulateActiveClass(true, circle)
    : manipulateActiveClass(false, circle)

const toggleButtons = () => {
  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === limitItems) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}

const update = () => {
  circles.forEach(manipulateCircles)

  const actives = document.querySelectorAll(".active")
  progress.style.width = `${((actives.length - 1) / (limitItems - 1)) * 100}%`
  toggleButtons()
}

prev.addEventListener("click", handlePrev)
next.addEventListener("click", handleNext)
