//getElementById()
//getElementByClassName()
//getElementByTagName()
// document.querySelector()
// querySelector('#btn')

// querySelectorAll()
const open = document.getElementById("Open");
const close = document.getElementById("Close");
const div = document.querySelector("#mydiv");


open.addEventListener("click", () =>{
    div.style.display = "block";
    close.style.display = "block";
    open.style.display = "none";
});

close.addEventListener("click", () =>{
    div.style.display = "none";
    close.style.display = "none";
    open.style.display = "block";
});



// const btn = document.getElementById("red");
// const btn2 = document.getElementById("green");
// const btn3 = document.getElementById("yellow");
// const btn4 = document.getElementById("blue");
// const btn5 = document.getElementById("black");




// btn.addEventListener("click", () => {
//         div.innerHTML = "Hello world"
//     });


// // Uncomment and use if needed
// // const myClick = () =>{
// //     console.log("Button clicked");
// // }

// // btn.addEventListener("click", () => {
// //     document.body.style.backgroundColor = "red";
// //     btn.style.color = 'red';
// // });
// // btn2.addEventListener("click", () => {
// //     document.body.style.backgroundColor = "green";
// //     btn2.style.color = 'green';
// // });
// // btn3.addEventListener("click", () => {
// //     document.body.style.backgroundColor = "yellow";
// //     btn3.style.color = 'yellow';
// // });
// // btn4.addEventListener("click", () => {
// //     document.body.style.backgroundColor = "blue";
// //     btn4.style.color = 'blue';
// // });
// // btn5.addEventListener("click", () => {
// //     document.body.style.backgroundColor = "black";
// //     btn5.style.color = 'black';
// // });