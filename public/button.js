const btn = document.querySelector(".toggle")
const nav = document.getElementById("toggleall")


btn.addEventListener("click", () => {
    btn.classList.toggle("active")
    nav.classList.toggle("active")
})