
const year = document.getElementById("year")
const thisYear =new Date().getFullYear()
year.setAttribute("datetime",thisYear)
year.textContent =thisYear
const toggle = document.getElementById("toggle")
const dark = document.getElementById("dark")
const white = document.getElementById("white")

dark.addEventListener('click', function() {
    toggle.href = "dark.css"
})

white.addEventListener('click', function() {
    toggle.href = ""
})




























