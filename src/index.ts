// arrayss
// errors

// let numbers:number[]= [1,2,'3']

//  let numbers:number[] = []
//  numbers[3] = 'hello'
//  numbers[0] = 2
//  numbers[1] = 234

//correct

// let numbers:number[] = [1,3,4,5,5]

// let number = [];
// number[0] = 'kushal',
// number[1] = 23

// numbers.forEach(n => n.toLocaleString())


//Tuple

// let user: [Number,String] = [1,'kushal']
// user.push(1)
// console.log(user)


//enums 

// const enum Size  {small,medium,large}
// let smallSize = Size.medium;
// console.log(smallSize)

// functions

// function interest(p:number,t:number,r:number):number{
//   let i;
//   if(p){
//     return p*t
//   }else{
//     return p/100
//   }
// }
// interest(1000,2,2.4,);

//Objects

//type aliases
// type User = {
//   id: number,
//   name: string
// }

// let user1: User = {
//   id: 1,
//   name: "kushal"
// }

// //union types 

// function wToKG(weight:number | string):number{
//   if(typeof weight === 'number'){
//     return weight * 2.2;
//   }else{
//     return parseInt(weight) * 2.2
//   }
// }

// //type intersection
// type dragable = {
//   drag: ()=> void;

// }

// type resizable = {
//   resize: ()=> void;
// }

// type uiwidget = dragable & resizable;

// let testBox:uiwidget = {
//   drag: ()=> {},
//   resize: ()=> {}
// }


// //literal types

// type Quantity = 50 | 100;

// const numberOfClothes: Quantity = 50;

// type Metrix = 'cm' | 'inch';
// const lenth:Metrix = 'cm'

// nullable types 
// function profile(name:string | null| undefined){
//   if(name){
//     console.log('hello' + name)
//   }else{
//     console.log('hello stranger')
//   }
// }

// profile(undefined)
console.log(new Date(1))


 


