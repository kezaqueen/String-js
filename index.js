let a='Extravaganza';
console.log(a);
console.log(a.slice(8,a.length));

//inserting a string 
let  food = "The quick fox jumped over the lazy dog";
let  insert ='eat';
console.log( newfoodword = food.slice(0,4) + insert + food.slice(4));

//counting

let story = "The quick brown fox jumps over the lazy dog";
const character = story.toLowerCase().split(" ");
let countThe = 0;
let countBrown = 0;
for (let word of character) {
    if (word === "the") countThe++;
    if (word === "brown") countBrown++;
}
console.log(`"the" appears: ${countThe} times`);
console.log(`"brown" appears: ${countBrown} times`);

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
let inputText = "a wonderful world";
const wordsList = inputText.split(' ');
const outputText = wordsList.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
console.log(outputText);



