// object literals
const mySym=Symbol("key1")
const jsUser={
    name:"Anisur",
    age:22,
    [mySym]:"mykey1",
    location:"Delhi",
    email:"anisur@gmail.com",
    isLoggedIn:false,
    lastloginDay:["Monday","saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["name"]);//another way of declration
// console.log(jsUser[mySym]);

// jsUser.email="rahman@gamil.com"//we esly chnge the data
// console.log(jsUser.email);

// Object.freeze(jsUser)//hear valeue is freez means we cannot change the vale


// jsUser.greeting= function(){
//     console.log("hello jsUser");
    
    
// }
// jsUser.greeting2= function(){
//     console.log(`hello jsUser${this.name}`);
    
    
// }
// console.log(jsUser.greeting());
// console.log(jsUser.greeting2());
//*************************************************object singlton*********************** */
//const tinderUser=new Object() //singolton object

// const tinderUser={}// non singlton object
// tinderUser.id="1223wer"
// tinderUser.name="Anisur"
// tinderUser.isLoggedIn=false
// //console.log(tinderUser);


// const regularUser={
//     email:"asvdfjj@gmal.com",
//     fullname:{
//         userfullname:{
//             firstname:"Anisur",
//             laastname:"Rahman"
//         }
//     }
// }
//console.log(regularUser.fullname.userfullname);
//********************merg obj */
// const obj1={1:"a",2:"b",}
// const obj2={3:"d",4:"e",}
// //const obj3={obj1,obj2}
// //const obj3=Object.assign({},obj1,obj2)
// //console.log(obj3);
// //***********by spread operator
// const obj3={...obj1,...obj2}
// //console.log(obj3);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggrd'));
//*************************D Structure in object */

const course={
    coursename:"js in hindi",
    price:"999",
    
    courseInst:"hitesh"
}
//course.courseInst
const {courseInst:instructor}=course
console.log(instructor);


