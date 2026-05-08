// JavaScript Number Methods Practice Task

// 1. toString()
let num1 = 500;
let res1 = num1.toString();
console.log(res1); // "500"

// 2. toFixed()
let num2 = 99.456;
let res2 = num2.toFixed(2);
console.log(res2); // "99.46"

// 3. toPrecision()
let num3 = 45.6789;
let res3 = num3.toPrecision(3);
console.log(res3); // 45.7

// 4. valueOf()
let num4 = 250;
let res4 = num4.valueOf();
console.log(res4); // 250

// 5. Number()
let num5 = "450";
let res5 = Number(num5);
console.log(res5); // 450

// 6. parseInt()
let num6 = "45.89";
let res6 = parseInt(num6); 
console.log(res6); // 45

// 7. parseFloat()
let num7 = "120.45rs";
let res7 = parseFloat(num7); 
console.log(res7); // 120.45

// 8. isNaN()
let num8 = "500";
let res8 = isNaN(num8);
console.log(res8); // false

// 9. isFinite()
let num9 = Infinity;
let res9 = isFinite(num9);
console.log(res9); // false

// 10. Number.isInteger()
let num10 = 25.5;
let res10 = Number.isInteger(num10); 
console.log(res10); // false


//  COMBINED EXAMPLES
// Example 1
let price = "99.567";
let c1 = Number(price).toFixed(1);
console.log(c1); // 99.6

// Example 2
let value = "45.89kg";
let c2 = parseFloat(value).toPrecision(3);
console.log(c2);// 45.9


// Example 3
let item1 = "250.50";
let item2 = "99.99";
let item3 = "50";

let total = Number(item1) + Number(item2) + Number(item3);
let roundedTotal = total.toFixed(2);
let finalResult = "Total: Rs." + roundedTotal;

console.log(finalResult); // "Total: Rs.400.49"
