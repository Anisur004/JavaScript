//forEach
const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( function (val){
//     console.log(val);
// } )
//another ways
coding.forEach( item => {
    //console.log(item);
} )


//foEach using function
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

//for each using array
coding.forEach((item ,index,arr )=> {
    //console.log(item,index,arr);
    
});


//****************using foaeach loop when object under array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )