// ===========ARRAYS IN JS==============
// let mark = [45,56,67,87,]
// console.log(mark)

// let herose = ["ironman","hulk","spiderman","antman","superman"];
// console.log(herose)

// ==============Lopping over an array==========

// let herose = ["ironman","hulk","spiderman","antman","superman"];
// for(let i=0; i < herose.length; i++){
//     console.log(herose[i])
// }

// let heroses = ["ironman","hulk","spiderman","antman","superman"];

// for(let hero of heroses){
//     console.log(hero)
// }

// let cities = ["dhaka","cumilla","feni","chotogram"];
// for(let city of cities){
//     console.log(city);
// }


// =============Qs1=========================================================================

// let marks = [85,97,44,37,76,60]
// let i = 0;
// for(let val of marks){
//     i += val;
// }
// let avg = i / marks.length;
// console.log(`avg marks of class = ${avg}`)
// ======================QS2 part1 use for of lop===============================================

// let items = [250, 645, 300, 900, 50];

// let i = 0;
// for(let val of items){
//     let offer = val / 10;

//     items[i] = items[i] - offer;

//     console.log(`value after offer = ${items[i]}`)
//     i++
// }

// ============qs2part2 use for lop=================================================================

// let items = [250, 645, 300, 900, 50];

// for (let i = 0; i < items.length; i++) {
    
//     let offer = items[i] / 10;

//     items[i] -= offer;
// }
// console.log(items)
// ===============array methods==============
// ===============Push("")=============

// let fruit = ["apple","banana","watermelon"]

// console.log(fruit.push("orange" ,"jackfruit"))




// let fruit = ["apple","banana","watermelon"]

// fruit.push("orange" ,"jackfruit")


// console.log(fruit)

// ============Pop()=============

// let friend = ["Tazim","chami","salman","shubo" ]

// console.log(friend)

//  deletedVal =friend.pop();

// console.log(friend);

// console.log("remove friend",deletedVal)

//===============toStrings()=============

// let friend = ["Tazim","chami","salman","shubo" ]

// console.log(friend)
// console.log(friend.toString())

// let evenNumber = [10,20,30,40,50,60,70,80,90,100];

// console.log(evenNumber);

// console.log(evenNumber.toString());


// ===============================concat()=====================

// let marvelheros = ["ironman","hulk","speiderman"];

// console.log(marvelheros);

// let dcheros = ["superman","betman","flash"];

// console.log(dcheros);

// let animeheros = ["goku","gojo","lufy"];

// console.log(animeheros);

// let heros = marvelheros.concat(dcheros,animeheros);

// console.log(heros);

//==============unshift()=================
// let marvelheros = ["ironman","hulk","speiderman"];

// marvelheros.unshift("antman","thour");

// console.log(marvelheros)

// ===========shift()====================

// let marvelheros = ["ironman","hulk","speiderman"];

// console.log(marvelheros)

// let value = marvelheros.shift()

// console.log("delete", value)

// console.log(marvelheros)

// ==============slice()==================

// let marvelheros = ["ironmam","dr.starge","hulk","thour"];

// console.log(marvelheros)

// console.log(marvelheros.slice(1,3));

//===============splice()==================

// let arr = [1,2,3,4,5,10,11,8,9,10];

// arr.splice(5,2,6,7);

// add Element
// arr.splice(5,0,101)

// delete Element
// arr.splice(5,2)

// Replace Element

// arr.splice(5,2,6,7)


// ==========================Qs3===============================================

// let companies = ["Bloomberg","Microsoft","Uber","Google","Ibm","Netflix"];

// companies.shift();

// companies.splice(1,1,"OLa");

// companies.push("Amazon");

// console.log(companies);


