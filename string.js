//JavaScript String Methods Practice

//1. toUpperCase()
let name = "ayesha";
let upperName = name.toUpperCase();
console.log("toUpperCase():", upperName);


//2. toLowerCase()
let email = "AYESHA123@GMAIL.COM";
let lowerEmail = email.toLowerCase();
console.log("toLowerCase():", lowerEmail);


//3. trim()
let username = "   Ayesha   ";
let cleanUsername = username.trim();
console.log("trim():", cleanUsername);


//4. slice()
let text1 = "JavaScript";
let sliceResult = text1.slice(0, 4);
console.log("slice():", sliceResult);


//5. substring()
let text2 = "JavaScript";
let substringResult = text2.substring(4, 10);
console.log("substring():", substringResult);


//6. replace()
let text3 = "I love cats";
let replaceResult = text3.replace("cats", "dogs");
console.log("replace():", replaceResult);


//7. includes()
let message = "I love JavaScript";
let includesResult = message.includes("JavaScript");
console.log("includes():", includesResult);


//8. indexOf()
let text4 = "I love JavaScript";
let indexResult = text4.indexOf("Java");
console.log("indexOf():", indexResult);


// 9. split()
let fruits = "apple,banana,mango";
let splitResult = fruits.split(",");
console.log("split():", splitResult);


// 10. concat()
let firstName = "Ayesha";
let lastName = "Saleem";
let fullName = firstName.concat(" ", lastName);
console.log("concat():", fullName);
