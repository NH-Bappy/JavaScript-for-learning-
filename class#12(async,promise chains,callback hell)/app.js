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

// let promise = new Promise((resolve,reject) => {
//     console.log("i am a promise")
// });
// ===============Fulfilled=============
// let promise = new Promise((resolve,reject) => {
//     console.log("i am a promise")
//     resolve(123)
// });
// ==============reject================
// let promise = new Promise((resolve,reject) => {
//     console.log("i am a promise")
//     reject("some error")
// });
// ====
// function getData (dataId){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             console.log("data = ",dataId)
//             resolve("success")
//         },2000)
//     })
// }

// let result = getData(133);
// console.log(result)
// =====
// function getData (dataId){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             reject("error")
//         },2000)
//     })
// }

// let result = getData(133);
// console.log(result)
// ====
// let error = new Promise((resolve,reject) => {
//     reject("error in code")
// })
// console.log(error)
// ====
// const getpromise = () => {
//     return new Promise((resolve,reject)=>{
//         console.log("i am a promise");
//         resolve("success");
//     });
// };

// let promise = getpromise();
// promise.then((res)=>{
//     setTimeout(()=>{
//         console.log("hello" ,res)
//     },5000);
// });
// ====
// const getpromise = () => {
//     return new Promise((resolve,reject)=>{
//         console.log("i am a promise");
//         reject("error");
//     });
// };

// let promise = getpromise();
// promise.then((res)=>{
//     setTimeout(()=>{
//         console.log("hello")
//     },2000);
// });

// promise.catch((err)=>{
//     console.log("wrong code", err)
// });
// =======promise chain======
// function asynsc () {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },2000);
//     });
// }


// console.log("fetching data1 ....")
// let p1 = asynsc();
// p1.then((res)=>{
//     console.log(res)
// });
// ======
// function asynsc () {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },2000);
//     });
// }

// function asynsc2 () {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         },2000);
//     });
// }

// console.log("fetching data1 ....")
// asynsc().then((res)=>{
//     console.log("fatching data2 ....")
//     asynsc2().then((res)=>{

//     });
// });
// =======

// function getData (dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",dataId)
//             resolve("success")
//         },2000);
//     });
// }

// console.log("fatching Data1 ...")
// getData(1).then((res)=>{
//     console.log("fatching Data2 ...")
//     getData(2).then((res)=>{
//         console.log("fatching Data3 ...")
//         getData(3).then(()=>{
//             console.log("fatching Data4 ...")
//             getData(4).then(()=>{});
//         });
//     });
// });
// =====
// function getData (dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",dataId)
//             resolve("success")
//         },2000);
//     });
// }

// getData(1)
//     .then((res)=>{
//         return getData(2);
// }).then((res)=>{
//     return getData(3);
// }).then((res)=>{
//     return getData(4);
// }).then((res)=>{
//     console.log(res)
// });

// ======================Async-Await========================
// async function hello() {
//     console.log("hello")
// }

// ====
// function api (){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     });
// }
// async function getWeatherdata() {
//     await api();
//     await api();
//     await api();
// }

// getWeatherdata()
// ====
// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId)
//             resolve("success")
//         },2000);
//     });
// }

// async function getAlldata(){
//     console.log("getting data1 ...")
//     await getData(1);
//     console.log("getting data2 ...")
//     await getData(2);
//     console.log("getting data3 ...")
//     await getData(3);
//     console.log("getting data4 ...")
//     await getData(4);
//     console.log("getting data5 ...")
//     await getData(5);
// }
// getAlldata();

// ====================compere============
// {
// ====callback hell===
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
// ===promise chaining===

// function getData (dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",dataId)
//             resolve("success")
//         },2000);
//     });
// }

// console.log("getting data1 ...")
// getData(1)
//     .then((res)=>{
//         console.log("getting data2 ...")
//         return getData(2);
// }).then((res)=>{
//         console.log("getting data3 ...")
//     return getData(3);
// }).then((res)=>{
//         console.log("getting data4 ...")
//     return getData(4);
// }).then((res)=>{
//     console.log(res)
// });
// ====Async-Await===
// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId)
//             resolve("success")
//         },2000);
//     });
// }

// async function getAlldata(){
//     console.log("getting data1 ...")
//     await getData(1);
//     console.log("getting data2 ...")
//     await getData(2);
//     console.log("getting data3 ...")
//     await getData(3);
//     console.log("getting data4 ...")
//     await getData(4);
// }
// getAlldata();

// }

// ==========================IIFE==================
// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId)
//             resolve("success")
//         },2000);
//     });
// }

// (async function (){
//     console.log("getting data1 ...")
//     await getData(1);
//     console.log("getting data2 ...")
//     await getData(2);
//     console.log("getting data3 ...")
//     await getData(3);
//     console.log("getting data4 ...")
//     await getData(4);
// })();

// ===================================================================
// async function foo(data) {
//     console.log(data)
    
// }

// async function result(){
//     await foo('hello world')
// }
// result()

// const number = [1,2,3,4,5]

//  let big = number.filter((val) =>val<3).map((val) =>val+5)
// console.log(big)

const str = 'hi i am bappy'
console.log()