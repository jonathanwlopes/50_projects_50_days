const smallCups = document.querySelectorAll(".cup-small")
const listers = document.getElementById("liters")
const percentage = document.getElementById("percentage")
const remained = document.getElementById("remained")

updateBigCup()

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx))
})

function highlightCups(idx) {
  const currentCup = smallCups[idx]

  if (
    currentCup.classList.contains("full") &&
    !currentCup.nextElementSibling?.classList.contains("full")
  ) {
    idx--
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full")
    } else {
      cup.classList.remove("full")
    }
  })

  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length
  const totalCups = smallCups.length
  const heightBigCup = 330

  if (fullCups === 0) {
    percentage.style.visibility = "hidden"
    percentage.style.height = 0
  } else {
    percentage.style.visibility = "visible"
    percentage.style.height = `${(fullCups / totalCups) * heightBigCup}px`
    percentage.innerText = `${(fullCups / totalCups) * 100}%`
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden"
    remained.style.height = 0
  } else {
    remained.style.visibility = "visible"
    remained.style.height = 'auto'
    listers.innerText = `${2 - (250 * fullCups / 1000)}L`
  }
}