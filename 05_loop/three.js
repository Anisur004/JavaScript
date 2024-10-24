//forOf loop
const arr=[1,2,3,4,5,6,]
for (const element of arr) {
    //console.log(element);
    
}
const greetinng="Hello world"
for (const element of greetinng) {
   // console.log(element);
    
}


//Maps
const map=new Map()  //map is object hold key value
map.set('IN',"INDIA")
map.set('US',"america")
map.set('FR',"france")
map.set('IN',"INDIA")
//console.log(map);
//map usin forof loop
for (const [key,value] of map) {
    console.log(key,':-',value);
    
}
// forof loop  by using object
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    /***************forof loop not working on object so we use for in loop */
// }