const fill = document.querySelector(".fill")
const empties = document.querySelectorAll(".empty")

fill.addEventListener("dragstart", e => dragStart(e))
fill.addEventListener("dragend", e => dragEnd(e))

for (const empty of empties) {
  empty.addEventListener("dragover", e => dragOver(e))
  empty.addEventListener("dragenter", e => dragEnter(e))
  empty.addEventListener("dragleave", e => dragLeave(e))
  empty.addEventListener("drop", e => dragDrop(e))
}

const dragStart = e => {
  e.target.className += " hold"
  setTimeout(() => (e.target.className = "invisible"), 0)
}

const dragEnd = e => (e.target.className = "fill")

const dragOver = e => e.preventDefault()

const dragEnter = e => {
  e.preventDefault()
  e.target.className += " hovered"
}

const dragLeave = e => (e.target.className = "empty")

const dragDrop = e => {
  e.target.className = "empty"
  e.target.append(fill)
}
