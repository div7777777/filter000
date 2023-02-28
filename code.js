const openFilter = document.querySelector(".open");
const myFilter = document.querySelector(".filter");
const closeFilter = document.querySelector(".close");

openFilter.addEventListener("click", ()=>{
myFilter.style.transform = "translateY(550px)";
myFilter.style.transition = "0.9s";
});
closeFilter.addEventListener("click", ()=>{
    myFilter.style.transform = "translateY(-550px)";
    myFilter.style.transition = "0.9s";
    });