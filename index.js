let a='Extravaganza';
console.log(a);
console.log(a.slice(8,a.length));

//inserting a string 
let  food = "The quick fox jumped over the lazy dog";
let  insert ='eat';
console.log( newfoodword = food.slice(0,4) + insert + food.slice(4));

//counting

let story = "The quick brown fox jumps over the lazy dog";
let word = 'the';
let count = (story.match(new RegExp(word, "g")) || []).length;
console.log(count);

let character = 'brown';
let countFor = (story.match(new RegExp(character, "g")) || []).length;
console.log(countFor);

//finding the words in a string

let string1 = "The pupils are reading in the library";
let string2 = "The child was sitting on the table before it fell";
let  characterOfAre = 'are';
let index1 = characterOfAre.includes('are');
console.log(`${index1}`);
let  characterOfSitting ='sitting';
let index2 = characterOfSitting.includes('sitting');
console.log(`${index2}`);

//uppercase
let str='wonderful';
console.log(str.toUpperCase());
//lowercase
let str2= 'amazing';
let str3= 'UndERneath';
console.log(str2.toLowerCase());
console.log(str3.toLowerCase());
//Title case
let str4="A wonderful world".replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase());



