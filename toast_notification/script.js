const buttonEl = document.getElementById("button")
const toastsEl = document.getElementById("toasts")

const messages = ["Message One", "Message Two", "Message Three", "Message Four"]

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function createNotification() {
  if (toastsEl.childElementCount >= 4) return

  const notif = document.createElement("div")
  notif.classList.add("toast")
  notif.innerText = getRandomMessage()

  toastsEl.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}

buttonEl.addEventListener("click", () => createNotification())
