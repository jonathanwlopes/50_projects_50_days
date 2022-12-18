const boxes = document.querySelectorAll(".box")

function checkBoxes() {
  // Percentage of the window that will be used on the trigger
  const windowPortion = window.innerHeight * 0.8

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < windowPortion) {
      box.classList.add("show")
    } else {
      box.classList.remove("show")
    }
  })
}

checkBoxes()
window.addEventListener("scroll", checkBoxes)
