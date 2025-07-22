
var number = + window.prompt("enter a number..")
console.log(number)

// another solve

function getValidateNumber(){
var num;
do{
    num = window.prompt("Enter a number ..");
}while(isNaN(+num));
return num;
}
getValidateNumber()



var number = + window.prompt("enter a number..")
if(number % 3 == 0 && number % 4 == 0){
    console.log("Yes")
}
else{
    console.log("No")
}


var num1 = + window.prompt("enter the frist number");
var num2 = + window.prompt("enter the second number");
if (num1 > num2){
    console.log(num1);
}
else if(num2 > num1){
    console.log(num2);
}
else{
    console.log("both number are equal")
}


var number = + window.prompt("enter a number...");
if(number < 0){
    console.log("Negative")
}
else if (number > 0){
    console.log("Positive")
}
else if (number == 0){
   console.log("zero is not positive or negative")
}



var num1 = + window.prompt("enter the frist number");
var num2 = + window.prompt("enter the second number");
var num3 = + window.prompt("enter the third number");

let maxElement = num1;
let minElement = num1;

if (num2 > maxElement) {
    maxElement = num2;
}
if (num3 > maxElement) {
    maxElement = num3;
}

if (num2 < minElement) {
    minElement = num2;
}
if (num3 < minElement) {
    minElement = num3;
}

  console.log("Max element =", maxElement);
  console.log("Min element =", minElement);




var number = + window.prompt("enter a number..");
if(number % 2 == 0){
    console.log("even");
}
else{
    console.log("odd");
}



var char = window.prompt("enter a character");
if(char == "e" || char == "a" || char == "i" || char == "o" || char == "u" ){
    console.log("vowel");
}
else{
    console.log("Consonant");
}



for(var i = 1 ; i<=5 ; i++){
    console.log(i);
}

var number = + window.prompt("enter a number");
for(var i = 1 ; i <= 12 ; i++){
    console.log(i*number);
}

var number = + window.prompt("enter a number");
for(var i = 1 ; i <= number ; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

var number = + window.prompt("enter a number");
for(var i = 2 ; i <= number ; i+=2){
    
        console.log(i);
}


var num1 = + window.prompt("enter the frist number");
var num2 = + window.prompt("enter the second number");
var fact = 1;
for (var i = 1 ; i <= num2 ; i++)
{
    fact *= num1;
}
console.log(fact);



var mark1 = + window.prompt("enter the frist mark");
var mark2 = + window.prompt("enter the second mark");
var mark3 = + window.prompt("enter the third mark");
var mark4 = + window.prompt("enter the fourth mark");
var mark5 = + window.prompt("enter the fivth mark");

var total = mark1 + mark2 + mark3 + mark4 + mark5;
var average = total / 5;
var percentage = (total / 500) * 100;

console.log("Total Marks =", total);
console.log("Average Marks =", average);
console.log("Percentage =", percentage + "%");


var month = + window.prompt("enter your month");
if (month === 1 || month === 3 || month === 5 || month === 7 ||
    month === 8 || month === 10 || month === 12) {
    console.log("days in month = 31");
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log("days in month = 30");
} else if (month === 2) {
    console.log("days in month = 28"); 
} else {
    console.log("Invalid month number");
}



var physics = + window.prompt("Enter marks for Physics:");
var chemistry =+ window.prompt("Enter marks for Chemistry:");
var biology = + window.prompt("Enter marks for Biology:");
var math = + window.prompt("Enter marks for Mathematics:");
var computer = + window.prompt("Enter marks for Computer:");

var total = physics + chemistry + biology + math + computer;
var percentage = (total / 500) * 100;

var grade;
  if (percentage >= 90) {
    grade = "A";
  } else if (percentage >= 80) {
    grade = "B";
  } else if (percentage >= 70) {
    grade = "C";
  } else if (percentage >= 60) {
    grade = "D";
  } else if (percentage >= 40) {
    grade = "E";
  } else {
    grade = "F";
  }

  console.log(grade);



var month = + window.prompt("enter your month");
switch (month) {
    case 1: 
    case 3: 
    case 5: 
    case 7: 
    case 8: 
    case 10: 
    case 12:
    console.log("days in month = 31");
    break;
    case 4: case 6: case 9: case 11:
    console.log("days in month = 30");
    break;
    case 2:
    console.log("days in month = 28");
    break;
    default:
    console.log("Invalid month number");
}


var char = window.prompt("enter a char");
switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    console.log("Vowel");
    break;
    default:
    console.log("Consonant");
}


var a = + window.prompt("enter the frist number");
var b = + window.prompt("enter the second number");
switch (true) {
    case (a > b):
    console.log("Max = " + a);
    break;
    case (b > a):
    console.log("Max = " + b);
    break;
    default:
    console.log("Both numbers are equal");
}


var number = + window.prompt("Enter a number");
switch (number % 2) {
    case 0:
    console.log("Even");
    break;
    case 1:
    console.log("Odd");
    break;
} 


var num = + window.prompt("Enter a number");
switch (true) {
    case (num > 0):
    console.log("Positive");
    break;
    case (num < 0):
    console.log("Negative");
    break;
    case (num === 0):
    console.log("Zero");
    break;
}


 
var num1 = +window.prompt("Enter the first number:");
var operator = window.prompt("Enter operator:");
var num2 = +window.prompt("Enter second number:");
var result;

switch (operator) {
    case '+':
    result = num1 + num2;
    break;
    case '-':
    result = num1 - num2;
    break;
    case '*':
    result = num1 * num2;
    break;
    case '/':
    result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    break;
    default:
    result = "Invalid operator";
}
console.log(result);
