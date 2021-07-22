function subtract(num1, num2) {
  return num1 - num2;
}

console.log(subtract(10, 5));

const welcome = function (name, age, gender) {
  return `My name is ${ name }, i am ${ age } years old and of gender ${ gender }`;
} 

console.log(welcome("Marco", 25, "male"));

const powerUp = (n1, n2) => n1 ** n2;

console.log(powerUp(2, 3));
console.log(powerUp(3, 3));