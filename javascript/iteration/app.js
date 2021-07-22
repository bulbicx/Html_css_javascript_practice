let a = 100;
while (a <= 200) {
  console.log("A");
  a++;
}

a = 100;
while (a <= 200) {
  if (a % 2 == 0) {
    console.log("-");
  } else {
    console.log("*");
  }
  a++;
}

function printNumTimesTen() {
  let num = 10;
  while (num > 0) {
    for (let i = 0; i < 10; i++) {
      console.log(num);
    }
    num--;
  }
}

printNumTimesTen();

//replace first while loop with for-loop
for (let a = 100; a <= 200; a++) {
  console.log("A");
}

//replace second while loop with for-loop
for (let a = 100; a <= 200; a++) {
  if (a % 2 == 0) {
    console.log("-");
  } else {
    console.log("*");
  }
}

//Switch case
let now = new Date();
let day = now.getDay();
switch (day) {
  case 6:
    console.log("It's saturday");
    break;
  case 7:
    console.log("It's sunday");
    break;
  case 1:
    console.log("It's monday");
  case 2:
    console.log("It's tuesday");
  case 3:
    console.log("It's wednesday");
  case 4:
    console.log("It's thursday");
  case 5:
    console.log("It's friday");
    break;
  default:
    console.log("default");
}