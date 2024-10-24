// if
const isUserloggedIn=true

if(isUserloggedIn){

}
//comparision operator<,>,<=,>=,==,!=,====
if(2==="2"){
    console.log("executed");
    
}
if(2<3){
    console.log("executed");
    
}
if(2==2){
    console.log("executed");
    
}
if(2>=2){
    console.log("executed");
    
}
if(2<=2){
    console.log("executed");
    
}
if(2!=2){
    console.log("executed");
    
}
if(score>100){
    const power="fly"
    console.log(`user power"&{power}`);
    
}
//if else
// const balance=1000;

// if (balance < 500) {
//         console.log("less than 500");
//      } else if (balance < 750) {
//          console.log("less than 750");
        
//  } else if (balance < 900) {
//      console.log("less than 750");
        
//     } else {
//          console.log("less than 1200");
    
//     }


//real life use
    const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
