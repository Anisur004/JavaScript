const name="Anisur"
const gameName =new String ('anisur Rahman')//another way of declaration

const repoCount=50
console.log(name + repoCount+ "Value");//old way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// mordern way

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf(1));


const newString=gameName.substring(0,3)
console.log(newString);
const anotherString= gameName.slice(3,4)
console.log(anotherString);

