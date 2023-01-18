const bars = document.querySelector(".hiddenmenu")
const menu = document.querySelector(".links")

bars.addEventListener("click",()=>{
    menu.classList.toggle("show")
})
menu.addEventListener("click",()=>{
    menu.classList.remove("show")
})