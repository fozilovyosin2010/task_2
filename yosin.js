//Recursion

// let take = (a) => {
//   let c = 0;
//   for (let i = 1; i <= a; i++) {
//     c += i;
//   }
//   return c;
// };
// console.log(take(2));

// function get(num) {
//   if (num == 1) {
//     return 1;
//   } else {
//     return num + get(num - 1);
//   }
// }

// console.log(get(2));

//Closure

// function plus(num) {

//   return function () {
//     return num;
//   };
// }

//1
// let plus2 = plus(10);
// console.log(plus2());

//2
// console.log(plus(10)());

// function summa(a) {
//   let cnt = 0;
//   return (num2) => {
//     cnt += a + num2;
//     return cnt;
//   };
// }

// let sumOfNum = summa(10);

// console.log(sumOfNum(11));
// console.log(sumOfNum(12));
// console.log(sumOfNum(13));
// CLASS TASK 2

// CLASSTASK_2

// TASK#1

// function add(num) {
//   if (num == 1) {
//     return 1;
//   } else {
//     return num + add(num - 1);
//   }
// }
// console.log(add(5));

// TASK#2

// let factorial = (num) => {
//   if (num == 0) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// };
// console.log(factorial(3));
// TASK#3

// let doubleFactorial = function (num) {
//   if (num === 1) {
//     return 1;
//   } else {
//     return num * doubleFactorial(num - 2);
//   }
// };
// console.log(doubleFactorial(9));

// TASK#4

// function sumDidit(num) {
//   if (num == 0) {
//     return 0;
//   } else {
//     return (num % 10) + sumDidit(parseInt(num / 10));
//   }
// }
// console.log(sumDidit(111));

// TASK#5

// let multisum = (num) => {
//   if (num === 1) {
//     return 55;
//   } else {
//     return 55 * num;
//   }
// };
// console.log(multisum(2));

// CLOSURE

// TASK#1

// function multiply(a) {
//   let c = 1;
//   return function (b) {
//     c = a * b;
//     return c;
//   };
// }
// let multiply2 = multiply(2);
// console.log(multiply2(5));
// console.log(multiply2(10));

// TASK#2

// let addfive = (a) => {
//   let c = 0;
//   return function (b) {
//     c += b;
//     return c + a;
//   };
// };

// let addfive_2 = addfive(5);
// console.log(addfive_2(10));
// console.log(addfive_2(10));

// TASK#3

// let add5 = function (a) {
//   let c = 0;
//   return function (b) {
//     c = a;
//     return c + b;
//   };
// };
// let add5_1 = add5(5);
// console.log(add5_1(3));
// console.log(add5_1(7));
// console.log(add5_1(-5));

//TASK#4

// function product(a, b) {
//   return function (c, d) {
//     return function (e, f) {
//       return a * b * c + d * e * f;
//     };
//   };
// }
// console.log(product(1, 2)(1, 1)(2, 3));

// TASK#5

// let sendPassword = (pass) => {
//   return function (input) {
//     return input == pass ? true : false;
//   };
// };
// let makePass = sendPassword("softclub");
// console.log(makePass("softclu"));

// SUMTASKS

// TASK#1
// function add_ly(a) {
//   return function () {
//     return a + "ly";
//   };
// }

// console.log(add_ly("hope")());

//CLASS_TASK_DAY3

// let gazoline = (x) => {
//   return function (y) {
//     return function (z) {
//       return parseInt((x - z) / y);
//     };
//   };
// };
// console.log(gazoline(1500)(20)(200));

// TASK#2

// function mean(a) {
//   let c = 0;
//   let int = 0;
//   for (let i = a; i >= 1; parseInt((i /= 10))) {
//     c += parseInt(i % 10);
//     int++;
//   }
//   return c / int;
// }
// console.log(mean(12345));

//TASK#3

// let centuty = (year) => {
//   return year / 100 == parseInt(year / 100)
//     ? year / 100
//     : year / 100 > parseInt(year / 100)
//     ? parseInt(year / 100) + 1
//     : 1;
// };

// console.log(centuty(1701));

//TASK#4

//unsolved

//TASK#5

// let smaller = (a, b, c) => {
//   return a < b && c ? a : b < c && a ? b : c;
// };
// console.log(smaller(10, 2, 3));

//TASK#6
// let MinandMax = function (a, b, c) {
//   console.log(a > b && c ? a : b > c && a ? b : c);
//   return a < b && c ? a : b < c && a ? b : c;
// };
// console.log(MinandMax(2, 3, 7));

//TASK#7

// function incAndDec(a, b, c) {
//   return a < b && b < c
//     ? a * 2 + " " + b * 2 + " " + c * 2
//     : -a + " " + -b + " " + -c;
// }
// console.log(incAndDec(5, 15, 30));

//sometasks

//TASK#1

// function sumDidit(n) {
//   let c = 0;
//   let d = 0;
//   for (let i = n; i >= 1; parseInt((i /= 10))) {
//     c = parseInt(i % 10);
//     if (c % 2 == 0 || 1) {
//       d++;
//     }
//   }
//   return d;
// }
// console.log(sumDidit(1004));

//TASK#2

// let sumnumbers = function (a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return function (e) {
//           return function (f) {
//             return a + b + c + d + e + f;
//           };
//         };
//       };
//     };
//   };
// };
// console.log(sumnumbers(2)(3)(4)(0)(0)(6));
