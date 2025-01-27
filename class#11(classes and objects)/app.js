
// ======Object======

// const student = {
//     name : "naimul",
//     marks : 3.67,
//     printMarks : function () {
//         console.log(student.marks)
//     },
    
// };

// const employee = {
//     calcTax () {
//         console.log("tax rate is 10%")
//     }
// };

// const bappy = {
//     salary : 50000,
// };

// bappy.__proto__ = employee;


// const employee = {
//     calcTax () {
//         console.log("tax rate is 10%")
//     }
// };

// const bappy = {
//     calcTax(){
//         console.log("text rate is 20%")
//     }
// };

// bappy.__proto__ = employee;


// ======Class=======



// class ToyotaCar {
//     start(){
//         console.log("start")
//     }
//     end(){
//         console.log("end")
//     }
//     setBrand(brand){
//         this.brand = brand;
//     }

// }

// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner")
// let lexus = new ToyotaCar();
// lexus.setBrand("lexus")

// ======constructor======

// class ToyotaCar {
//     constructor(brand,mileage){
//         console.log("creating new object")
//         this.brand = brand
//         this.mileage = mileage
//     }
//     start(){
//         console.log("start")
//     }
//     end(){
//         console.log("end")
//     }
// }
// let fortuner = new ToyotaCar("Toyota",10);
// console.log(fortuner)
// let lexus = new ToyotaCar("lexus",15);
// console.log(lexus)

// =======inheritance========

// class parent {
//     hello(){
//         console.log("hello")
//     }
// }
// class child extends parent{}

// let obj = new child()


// class person {
//     constructor(){
//         this.species = "homo sapiens"
//     }
//     eat(){
//         console.log("he can eat")
//     }
//     sleep(){
//         console.log("he can sleep")
//     }
//     work(){
//         console.log("he can't solve problem")
//     }
// }

// class Enginner extends person{
//     work(){
//         console.log("he can solve problem")
//     }
// }

// class doctor extends person{
//     work(){
//         console.log("she can treat people")
//     }
// }

// let bappy = new Enginner();

// let pamika = new doctor();

// =======Super keyword=========

// class person {
//     constructor(){
//         console.log("enter parent construstor")
//         this.species = "homo sapiens"
//     }
//     eat(){
//         console.log("he can eat")
//     }
// }

// class Enginner extends person{
//     constructor(branch){
//         console.log("enter child constructor")
//         super();//to invoke parent class constructor
//         this.branch = branch
//         console.log("exit child constructor")
//     }
//     work(){
//         console.log("he can solve problem")
//     }
// }


// let bappy = new Enginner("software enginner");

// class person {
//     constructor(name){
//         this.species = "homo sapiens"
//         this.name = name
//     }
//     eat(){
//         console.log("he can eat")
//     }
// }

// class Enginner extends person{
//     constructor(name,branch){
//         super(name);//to invoke parent class constructor
//         this.branch = branch
//     }
//     work(){
//         super.eat();
//         console.log("he can solve problem")
//     }
// }


// let enginner = new Enginner("shradha","CSE Enginner");

// ==========================Let's practice====================
// let Data = "imformation about student and teacher"

// class user {
//     constructor(name,email){
//         this.name = name;
//         this.email = email
//     }
//     vewData(){
//         console.log(Data)
//     }
// }

// let stu1 = new user("bappy","bsieel949484@gmail.com")
// let stu2 = new user("rafi","bsieel949484@gmail.com")
// let teacher = new user("al-amin","ghfjghddjsl@.gmail.com")

// ==========================Qs2=========================

let Data = "imformation about student and teacher"

class user {
    constructor(name,email){
        this.name = name;
        this.email = email
    }
    vewData(){
        console.log(Data)
    }
}

class Admin extends user {
    constructor(name,email){
        super(name,email);
    }
    editData(){
        Data = "new data"
    }
}

let admin = new Admin("admin","adminCollege@gmail.com");

















