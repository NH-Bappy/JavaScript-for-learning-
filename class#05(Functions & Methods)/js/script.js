// ===========function=============

// function myfunction(){
//     console.log("this is my first function")
//     console.log("I love javascript more than any language")
// }

// myfunction()
// myfunction()


// function errorfunction(mgs ,n){
//     console.log(mgs*n)
// }
// errorfunction("what are you doing",10)
// ===============return======================

// function sum(x,y){
//     s = x + y;
//     return s;
// }

// let val = sum(3,4);

// console.log(val)





// ==============Second type of function================
// function sum(x,y){
//     console.log(x+y)
// }


//==============arrow function================


// sun function

// let sum = (a,b) =>{
//     return a+b;
// }

// // multiflication function

// let mul = (a,b)=>{
//     return a*b;
// }

// mul()

// let printhellow = () =>{
//     console.log("hello")
// }
// printhellow()

// ==============================================let's practice============================================

// function countVowel (str){
//         let count = 0;
// for(const char of str){

//     if( char === "a" ||
//         char === "e" || 
//         char === "i" || 
//         char === "o" || 
//         char === "u"
//     ){
//         count++;
//     }
// }
// return count;
// }

// let countVow = (str) => {
//     let count = 0;
// for(let char of str){
//     if(char === "a" ||
//         char === "e" || 
//         char === "i" || 
//         char === "o" || 
//         char === "u"
//     ){
//         count++;
//         }
// }
// return count;
// }

// ===============forEach=======================

// let arr = [1,2,3,4,5,6,7,8,9,];

// arr.forEach(function arrVal(l,j,k){
//     console.log(l,j,k);
// })
    

// ====================================================let's practice========================================

// let square = [1,2,3,4,5,6,7,8,9]

// square.forEach((val) => {
//     // console.log(val*val)
//     console.log(val**2) //another methods
// })

//==================another methods


// let square = [1,2,3,4,5,6,7,8,9]

// let calSquare = (val) => {

//     console.log(val**2)
// }

// square.forEach(calSquare)

// =================map==============

// let num = [1,2,3,4,5,6,7,8,9,];

// num.map((val) =>{
//     console.log(val)
// })

// let num = [1,2,3,4,5,6,7,8,9,];

// let newArray = num.map((val) =>{
//     return val*2;
// })
// console.log(newArray)

// let num = [1,2,3,4,5,6,7,8,9,];

// let newArray = num.map((val) =>{
//     return val*val;
// })
// console.log(newArray)

// ======================filter==============

// let num = [1,2,3,4,5,6,7,8,9,100];

// let big = num.filter((val) =>{
//     return val > 2;
// })
// console.log(big)


// let num = [1,2,3,4,5,6,7,8,9,100];

// let odd = num.filter((val) =>{
//     return val % 2 !== 0;
// })
// console.log(odd)
// let num = [1,2,3,4,5,6,7,8,9,100];

// let even = num.filter((val) =>{
//     return val % 2 === 0;
// })
// console.log(even)
// ============Reduce===============
// const array1= [1,2,3,4,];
// const initialValue = 0;
// const sum = array1.reduce((previousValue,currentValue) =>previousValue+currentValue,initialValue)
// console.log(sum);

// const array1= [1,2,3,4,];
// const initialValue = 0;
// const sum = array1.reduce((previousValue,currentValue) =>{
//     return previousValue+currentValue
//     })
// console.log(sum);

// const arr = [1,2,3,4];
// const sum = arr.reduce((resulr,current) =>{
//     return resulr+current
// });
// console.log(sum);

// const arr = [5,6,3,7];
// const largestNumber = arr.reduce((previous,current) =>{
//     return previous > current?previous:current;
// });
// console.log(largestNumber);

// ===========================let's practice==============
// Qs1
// let student = [30,50,60,89,90,100,99,95,96]
// let topMark = student.filter((val) =>{
//     return val>90
// })

// console.log(topMark)

// Qs2

let n = prompt("Enter a number");

let arr = [];
for(let i=1;i<=n;i++){
    arr [i-1] = i; //1(0),2(1),3(2),4(3)
}
console.log(arr)
let sum =arr.reduce((previous,current) => {
    return previous+current;
})
console.log("sum",sum);

let  factorial=arr.reduce((previous,current) => {
    return previous*current;
})
console.log("factorial",factorial);

