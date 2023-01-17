const canvas = document.getElementById("canvas")
const increaseBtn = document.getElementById("increase")
const decreaseBtn = document.getElementById("decrease")
const colorEl = document.getElementById("color")
const sizeEl = document.getElementById("size")
const clearEl = document.getElementById("clear")

const ctx = canvas.getContext("2d")

let isPressed = false
let size = 10
let color = "black"
let x
let y

function drawCircle(x, y) {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, 2 * Math.PI)
  ctx.fillStyle = color
  ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}

canvas.addEventListener("mousedown", e => {
  isPressed = true
  x = e.offsetX
  y = e.offsetY
})

function updateSizeOnScreen() {
  sizeEl.innerText = size
}

canvas.addEventListener("mousemove", e => {
  if (isPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    x = x2
    y = y2
  }
})

canvas.addEventListener("mouseup", e => {
  isPressed = false
  x = undefined
  y = undefined
})

colorEl.addEventListener("change", e => (color = e.target.value))

increaseBtn.addEventListener("click", e => {
  size += 5

  if (size > 50) {
    size = 50
  }

  updateSizeOnScreen()
})

decreaseBtn.addEventListener("click", e => {
  size -= 5

  if (size < 5) {
    size = 5
  }

  updateSizeOnScreen()
})

clearEl.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
)
