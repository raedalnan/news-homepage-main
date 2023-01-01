const btn = document.querySelector(".menu-btn");
const menu = document.querySelector("#menu");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay")

btn.addEventListener("click" , ()=>{
    menu.classList.toggle("active")
    if(menu.classList.contains("active")){
        open.classList.add("hidden");
        close.classList.remove("hidden")
        overlay.classList.remove("hidden")
    }else{
        close.classList.add("hidden");
        open.classList.remove("hidden")
        overlay.classList.add("hidden");
    }
})