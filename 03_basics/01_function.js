// function addtwonum(num1,num2){
//     console.log(num1+ num2);
    
// }
// addtwonum(2,4)


// function addtwonumber(num1,num2){
//     return num1+num2;
    
// }
// const result =addtwonumber(6,4)
// console.log("Result:",result);


// function userLogin(username){
//     return `${username} just loged in`
// }
// console.log(userLogin("Anisur"));


function claculateCartPrice(...number){ //when we add multipale valu then we use rest operator
return number
}
//console.log(claculateCartPrice(20,5,7,34,));
//function using in object
const user={
    username:"Anisur",
    price:99
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is${anyobject.price}`);
    
}
handleObject(user)
// handleObject({
//     username:"rahman",
//     price:399
// })


/************************function in array
 */
const myArray=[200,355,67,89,]
function returnSecondvalue(getArray){
    return getArray[1]
}
//console.log(returnSecondvalue(myArray));
console.log(returnSecondvalue([200,300,67,]));
