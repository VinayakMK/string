/*let str = "good evening everyone";
console.log(str.length);*/

/*let str = "good evening everyone";
let res = str.slice(4,13)
console.log(res);*/

/*let str = "good evening everyone";
let res = str.substring(5,10)
console.log(res);*/

/*let str = "a program with online session";
let res = str.replace('online','offline'); //replaces first find
console.log(res);
console.log(str);*/

/*let str = "a program with offline session offline Offline";
let res = str.replaceAll('online','offline');
console.log(res);*/

/*let str = "a program with offline session offline Offline";
let res = str.toUpperCase(); //str.toLowerCase
console.log(res);*/

/*let str1 = "good evening ";
let str2 = "Vinayak";
let res = str1.concat(str2); 
console.log(res);*/

/*let str = "     a program with offline session offline Offline       ";
let res = str.trim(); //str.trimStart //str.trimEnd
console.log(res);*/

/*let str = "5";
//let res = str.padStart(4,"0");
let res = str.padStart(4,"F"); //padEnd()
console.log(res);*/

/*let str = "a program with offline session offline Offline";
let res = str.charAt(6); 
console.log(res);*/

/*let str = "a program with offline session offline Offline";
let res = str.charCodeAt(6); 
console.log(res);*/

/*let nameStr = "Arjun, Rahul, Ram, Mohan";
let res = nameStr.split("-");
console.log(res);*/

//Dynamically accept your name as input and convert it to upper case
/*const arr = require("readline-sync");
let name = arr.question("Enter your name :");
let res= name.toUpperCase()
console.log(res);*/

//Dynamically accept your name as input and convert it to lower case
//const arr = require("readline-sync");
/*let name = arr.question("Enter your name :");
let res= name.toLowerCase()
console.log(res);*/

//Print how many times each repeating each character in this string //{A:3,B:2,C:1,D:1}
/*var text = "ABCDAAB";
var repeat = {};
text.split('').forEach((ele)=> {
    repeat[ele] = repeat[ele] ? repeat[ele] + 1 : 1;
});
console.log(repeat);*/

/*let str = "Entri elevate course";
let res = str.indexOf("elevate");
console.log(res);*/

/*let str = "Entri elevate course";
let res = str.indexOf("elevate");
console.log(res);*/

/*let str = "Entri elevate course one of the best";
let res = str.lastIndexOf("course");
console.log(res);*/

/*let str = "Entri elevate course one of the best";
let res = str.search("course");
console.log(res);*/

/*let str = "Entri elevate course one of the best";
let res = str.match("course");
for(let co of res.values()) console.log(co);
console.log(res);*/

/*let str = "Entri elevate course one of the best";
let res = str.matchAll(/course/gi);
for(let co of res) console.log(co);
console.log(res);*/

/*let str = "Entri elevate course one of the best";
let res = str.includes("course");
console.log(res);*/

/*let str = "Entri elevate course one of the best";
let res = str.startsWith("elevate"); //endsWith
console.log(res);*/




//rest_parameter
/*function sum(a,b,...args){
    console.log(args);
}
sum(2,3,5,7,9);*/

//spread
/*let arr = [10,20,60,40,22];
let res = Math.max(...arr);
console.log(res);*/

/*let arr1 = [10,20,60,40,22];
let arr2 = [100,200,600,400,222];
let res = [...arr1,...arr2];
console.log(res);*/

/*let arr1 = [10,20,60,40,22];
let newArr = [...arr1];
newArr = [0].arr1;
console.log(arr1);
console.log(newArr);*/



//Find the index of the first word 'India' in the above string
/*let str = "India is my country, I love India";
let res = str.indexOf("India");
console.log(res);*/

//Find the index of the last word 'India' in the above string
/*let str = "India is my country, I love India";
let res = str.lastIndexOf("India");
console.log(res);*/

//Find the all the matches of the word 'india' in the above string
/*let str = "India is my country, I love India";
let res = str.matchAll(/course/gi);
for(let co of res) console.log(co);
console.log(res);*/

//Check the word 'India' included in the above string
/*let str = "India is my country, I love India";
let res = str.includes("India");
console.log(res);*/

//Check above string start with the word 'India'
/*let str = "India is my country, I love India";
let res = str.startsWith("India");
console.log(res);*/

//Check the above string end with the word 'India'
/*let str = "India is my country, I love India";
let res = str.endsWith("India"); 
console.log(res);*/

//Define a function to find the sum of any number of arguments we pass to it.
/*function sum(a,b,...args){
    let add = 0;
    for(let arg of args) add += arg;
    console.log(add);
}
sum(2,3,5,7,9);*/

//Merge 2 arrays using spread operator
/*let arr1 = [9,18,27,36,45];
let arr2 = [54,63,72,81,90];
let res = [...arr1,...arr2];
console.log(res);*/

//Create a deep clone of an array
/*let arr1 = [10,100,1000,10000,100000,1000000];
let newArr = [...arr1];
newArr[0];
console.log(arr1);
console.log(newArr);*/