const open = document.getElementById("open");

const close = document.getElementById("close");

const div = document.getElementById("div");

//
const myDiv = document.getElementById("myDiv");

open.addEventListener("click", ()=> {
    myDiv.style.display = "block";
    close.style.display = "block";
    open.style.display = "none";
    div.style.display = "none";
})

close.addEventListener("click", () =>{
    myDiv.style.display = "none";
    close.style.display = "none";
    open.style.display = "block";
    div.style.display = "block";
})