const labels = document.querySelectorAll(".form-control label")

const letterEffect = (letter, idx) =>
  `<span style="transition-delay: ${idx * 15}ms">${letter}</span>`

labels.forEach(label => {
  label.innerHTML = label.innerText.split("").map(letterEffect).join("")
})
