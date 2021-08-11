
// document.write("Hello World!")

// let a = 1;

// for(let a=1;a<=10;a++){
//     document.write("<br>");
//     document.write(a);

// }
// let i = 1;
// switch(i){

//     case 1:
//         document.write(1);
//         break;
//     case 2:
//         document.write(2);
// }

// let a = [1,2,3,4,5,6,7]

// for(let x in a){
//     document.write(a[x])
// }
// let pTag = document.getElementById("vidya");

// pTag.addEventListener("mouseover",fun);


// function fun(event){

//     console.log(event.target.innerHTML)
//     // console.log(event.target.value)
//     event.target.innerHTML = "This is vidyaVardhini."
// }

// class Shapes{
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }

// class Rectangle extends Shapes{
//     constructor(height, width) {
//         super(height,width);
//     }

//     perimeter() {
//         return 2 *(this.height + this.width);
//     }  

// }



// let rec1 = new Rectangle(20,15);
// let p = document.getElementById("rect");
// p.innerHTML = rec1.perimeter();

// get area() {
//     return (this.height * this.width);

// }

// height(){

//     return (this.height);
// }


// class test {
//     *generator(i) {
//         while (true) {
//             i = i + 10;
//             yield i;
//         }
//     }
// }

// const t=new test();

// const gen=t.generator(10);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// console.log(((a)=> a + 100)(10))


// class A{
//      alice = ()=> ()=>(a)=>{return a+100;}
// }

// let obj = new A();
// console.log(obj.alice()()(10));

// var arr = [5, 6, 13, 0, 1, 18, 23];

// var sum = arr.reduce((a, b) => a + b);

// var even = arr.filter((v) => v % 2 == 0);

// var double = arr.map((v) => v * 2);

// console.log(sum);
// console.log(even);
// console.log(double);

// console.log("good morning");
// setTimeout(()=>{console.log("done")},5000);
// console.log("waiting");

// let func1=()=>{func2()}
// let func2=()=>{console.log("hello");}
// func1();


// let addpos =(n1,n2)=>{
//     return new Promise(function(resolve,reject){
//             if(n1>0 && n2> 0)
//             {
//                 resolve(n1+n2);
//             }
//             else
//             {
//                 reject("number is not positive");
//             }
//         }
//     )
// }

// addpos(10,10)
// .then((res)=>console.log(res,"success"))
// .catch((error1) => console.log(error1));

// function addpos(n1, n2) {
//     let p = new Promise(function (resolve, reject) {
//         if (n1 > 0 && n2 > 0) {
//             resolve(n1 + n2);
//         }
//         else {
//             reject("number is not positive");
//         }
//     }
//     )
//     return p;
// }

// addpos(10, 10)
//     .then(success)
//     .then((response)=>console.log(response))
//     .catch(error1);

// function success(result) {
//     return new Promise((resolve,reject)=>{

//         if(result >= 0){
//             resolve(result)
//         }else{
//             reject("promise not resolved");
//         }
//     })
// }

// function error1() {
//     console.log(result);
// }


var promise = new Promise(function (resolve, reject) {
const x = "vcet"
const y = "vcet"
if (x == y) { resolve("equal"); }
else { reject("not equal") }
});

promise
.then( (response) => { console.log(response) })
.catch( (err) => { console.log(err) })
.finally(()=>console.log("It will run anyway"));


//FETCH API
// const fetch = require('node-fetch')
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>response.json())
// .then((res)=>console.log(res))
// .catch()