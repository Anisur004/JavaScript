"use strict";//treat all JS CODE AS NEWER VERSION
//alert(3+3) we are using node js,notbrowser
let name="Anisur"
let age=18
let isLogged=false
/*
numbrer=>2 to power 53
bigint
string=>""
boolean=>true/false
null=>standalone value
undefined=>
symbol=>uniqeness
object

*/
console.log(typeof age)
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof name)
// ******************Summary*************************

// Primitive
// 7 type: string ,number,Boolean,null,undefined, symbole,BigInt
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);//not same value


// Refrance(non premetive)
//Array ,Object,Functions
console.log(typeof anotherId);
