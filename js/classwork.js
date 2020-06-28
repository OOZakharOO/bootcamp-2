"use strict";
// переменные let и conts
let name; //объявление переменной
console.log(name);

name = "Aleksa";
console.log(name);

name = "Aleksandra"; //переприсвоение
console.log(name);

const lastName = "Hrevtsova";
console.log(lastName);

// lastName = "fasfrgsf" - нельзя переназначить

// типы данных

// примитивы

// 1- String ('', "", ``)
let myName = "Aleksandra";
console.log(myName); // Aleksandra
console.log(typeof myName); // string
let bool = "true";
console.log(bool);

let count = "30";
console.log(count);
console.log(typeof count);
// 2- Number
let age = 30;
console.log(age);
console.log(typeof age); // number

// 3- Boolean
let isOnline = true;
console.log(isOnline);
console.log(typeof isOnline);

isOnline = false;
console.log(isOnline);
console.log(typeof isOnline);

// 4- Underfined
let products;
console.log(products);
console.log(typeof isOnline);

// 5- Null
let cart = null;
console.log(cart);
console.log(typeof cart);

// сложные

// Object
const obj = {};
console.log(obj);

const sasha = {
  // properties
  name: "Sasha",
  lastName: "Hrevtsova",
  age: 30,
  hairColor: "brown",
  married: false,
  children: true,
  // methods
  toShowName() {
    console.log(this.name);
  },
};
console.log(sasha);
sasha.name = "Aleksandra";
console.log(sasha);

sasha.toShowName();

// Array
const arr = [];
console.log(arr);

const productslist = [
  "apples",
  { meat: "chiken", eggs: 10, bread: "white" },
  null,
];

console.log(productslist);

console.log(productslist[0]); // apples
console.log(productslist[1]); // {meat: "chiken", eggs: 10, bread: "white" }
console.log(productslist[2]); // null

productslist[0] = "oranges";

console.log(productslist);

// многомерные массивы
const newArr = [
  [1, 2, 3], //ind 0
  ["alpha", "beta", "gama"], // ind 1
  [undefined, null], // ind 2
];
console.log(newArr);
console.log(newArr[0][0]); // 1
console.log(newArr[0][1]); // 2
console.log(newArr[0][2]); // 3

console.log(newArr[1][0]); // alpha
console.log(newArr[1][1]); // beta
console.log(newArr[1][2]); // gama

console.log(newArr[2][0]); // undefined
console.log(newArr[2][1]); // null

// Function
// function expression - функциональное выражение
const funcExpression = function (a, b, c) {
  // объявление функции
  console.log(a + b + c);
  console.log("Hello!");
  console.log("I'm a function Expression");
};
// аргум. = значения параметров при вызове
funcExpression(1, 2, 3);

// arrow function
const arrowFunc = (a, b, c) => console.log(a + b - c);
arrowFunc(19, 45, 25);

// function declaration
function funcDeclaration(a, b, c) {
  console.log(a * b * c);
}
funcDeclaration(2, 4, 5);

// операторы сравнения
console.log(5 > 7); // false
console.log(4 > 2); // true
console.log(3 >= 3); // true
console.log(3 >= 4); // false

// равенства
// строгое равенство
console.log(5 === "5");
console.log(true === 1);

// нестрогое равенство
console.log(5 == "5");
console.log(true == 1);
console.log(false == 0);
console.log(undefined == 0);
console.log(undefined == 1);
console.log(null == 0);

// неравенства
// строгое
console.log(5 !== "5");

//нестрогое
console.log(5 != "4");

// !- отрецание
console.log(!true);
console.log(!false);

// преобращование типов
//к строке
let num = 12;
console.log(typeof num);

num = num + "";
console.log(num);
console.log(typeof num);

let newNum = true;
console.log(newNum);
console.log(typeof newNum);

newNum = String(newNum);
console.log(newNum);
console.log(typeof newNum);

// к числу
let stringNum = "34";
console.log(stringNum);
console.log(typeof stringNum);

stringNum = +stringNum;
console.log(stringNum);
console.log(typeof stringNum);

let boolNum = true;
console.log(boolNum);
console.log(typeof boolNum);

boolNum = Number(boolNum);
console.log(boolNum);
console.log(typeof boolNum);

//к булю
let numvalue = 1;
console.log(numvalue);
console.log(typeof numvalue);

// falsy values js
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));

console.log(Boolean(1));
console.log(Boolean(" "));
console.log(Boolean(" "));
console.log(Boolean(` `));
console.log(Boolean(Infinity));
console.log(Boolean(true));

//логические операторы
// && - логическое и
// возвращает последнее тру значение если все тру
console.log(1 && true);
//    true && true
console.log(0 && true);
//    false && true
console.log(false && true);
//   false && true
console.log(1 && 0 && true && false);

console.log(1 && false && true && 0);

// || - логическое или
console.log(1 || true || 100);
console.log(1 || true);
//    true && true
console.log(0 || true);

console.log(false || true || 1);

console.log("" || 0 || undefined || false);

console.log(NaN ||  || undefined || false);


// ! - логическое не
console.log(!1);
console.log(!0);
console.log(!"");
console.log(!" ");
console.log(!NaN);
console.log(!undefined);
console.log(!null);


console.log(!!1);
console.log(!!0);
console.log(!!"");
console.log(!!" ");
console.log(!!NaN);
console.log(!!undefined);
console.log(!!null);



