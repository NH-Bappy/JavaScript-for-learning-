
// let catc = document.querySelector("button");

// let nek = document.createElement("h5");
// nek.innerText = "The button was clicked";
// nek.style.display = "none";
// document.body.appendChild(nek);

// catc.addEventListener("click", () => {
//   nek.style.display = "block";
// });

// ===================
// let btn = document.querySelector("#btn1")
// btn.onclick = () =>{
//     let click = document.createElement("h5")
//     click.innerText = "hi there"
//     btn.after(click);
// }

// let box = document.querySelector("div")
// box.onmouseover = () =>{
//     console.log('you are in the box');
// }

// let btn2 = document.querySelector(".btn2");
// btn2.onclick = () =>{
//     console.log("second btn was click");
// }

// let btn2 = document.querySelector(".btn2");
// btn2.onclick = (e) =>{
//     console.log(e);
// }

// let btn2 = document.querySelector(".btn2");
// btn2.onclick = (e) =>{
//     console.log(e.type);
// }

let btn = document.querySelector("#btn1");

btn.addEventListener("click",() =>{
    console.log("naimul")
})
btn.addEventListener("click",() =>{
    console.log("hasan")
})
// =======remove======
let wrong = () => {
    console.log("rafi")
}

btn.addEventListener("click",wrong);
// =========remove=========

btn.addEventListener("click",() =>{
    console.log("bhuiyan")
})
// ========remove========
btn.removeEventListener("click",wrong)














