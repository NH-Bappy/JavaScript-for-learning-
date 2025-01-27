// synchronous

// console.log("one")
// console.log("two")
// console.log("three")
// ==============setTimeout===========
// function hello (){
//     console.log("hello")
// }
// ==
// setTimeout(hello,4000)

// setTimeout(() => {
//     console.log("hello")
// },4000)
// =====================Asynchronous==============

// console.log("one")
// console.log("two")
// setTimeout(() => {
//     console.log("hello")
// },4000)
// console.log("three")
// console.log("four")
// ==
// console.log("start");
// setTimeout(() => {
//     console.log("TimeOut")
// },0)
// console.log("end") 

// =================callbacks==================

// function sum (a,b) {
//     console.log(a+b)
// }

// function calculatour (a,b,sumCallback) {
//     sumCallback(a,b);
// }

// calculatour(2, 3, sum)

// ==
// function sum (a,b) {
//     console.log(a+b)
// }

// function calculatour (a,b,sumCallback) {
//     sumCallback(a,b);
// }

// calculatour(2, 3, (a,b) => {
//     console.log(a+b);
// });
// ==
// const hello = () => {
//     console.log("hello");
// }
// setTimeout(hello,3000);

// ==========callback hell=========

// =====nesting======
// (
// nested if ===
// let age = 10 ;

// if(age >= 18){
//     if(age >= 60){
//         console.log("you are a senior")
//     }else{
//         console.log("you are meddle")
//     }
// }else{
//     console.log("you are child")
// }

// nested loop

// for(let i= 0; i <= 5 ;i++){
//     let str = "";
//     for(let j = 0 ; j <=5 ; j++){
//         str = str + j
//     }
//     console.log(i,str)
// }

// =====callback hell=========
// function getData (dataId,getNextData){
//     setTimeout(() => {
//         console.log("data",dataId)
//         if(getNextData){
//             getNextData();
//         }
//     },2000)
// }

// getData(1,() => {
//     console.log("getting Data2....");
//     getData(2,() => {
//         console.log("getting Data3....");
//         getData(3,() => {
//             console.log("getting Data4....");
//             getData(4)
//         });
//     });
// });

// ==========promises===========















































