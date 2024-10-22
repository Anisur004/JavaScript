const marvel_heros=["thor","ironman","spiderman"]
const dc_hero=["superman","batman","flash"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros)


// const allHero=marvel_heros.concat(dc_hero)
// console.log(allHero);
// //another method
// const all_new_Hero=[... marvel_heros, ...dc_hero]
// console.log(all_new_Hero);



const another_array=[1,2,3,[4,5,6],7,[8,9,],[4,6]]
const real_another_Array=another_array.flat(Infinity)
//console.log(real_another_Array);




console.log(Array.isArray("Anisur"));
console.log(Array.from("Anisur"));
console.log(Array.from({name:"Anisur"}));

let score1=100
let score2=200
let score3=300
 console.log(Array.of(score1,score2,score3));
 