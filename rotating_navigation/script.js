const open = document.querySelector("#open")
const close = document.querySelector("#close")
const content = document.querySelector(".content")

const handleOpen = () => content.classList.add("show-nav")
const handleClose = () => content.classList.remove("show-nav")

open.addEventListener("click", handleOpen)
close.addEventListener("click", handleClose)