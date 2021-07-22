let myArray = ["hello", "everyone"];
console.log(`length is: ${ myArray.length }`);

myArray.push("hey");
myArray.push("hola");
myArray.push("como estas");

console.log(`length ${ myArray.length }`);

myArray.shift();

for (let el of myArray) {
  console.log(el);
}