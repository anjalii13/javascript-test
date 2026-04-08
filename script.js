// Task-1
function reverse(sentence){
    return sentence
    .split(" ")
    .map(word=>word.split("").reverse().join(""))
    .join("");

}
const input="Hello World From Wisdom Sprouts IT Training Hub";
const output=reverse(input);
console.log(output);



// Task-2
function para(text){
    return text
    .toLowerCase()
    .trim()
    .replace(/[@!#$%^&*()_+={}\[\]|\\:;'"<>,.?/~`-]/g, '')
    ;


}
const text1 ="Hii@@ my name is anjali and i am a student-- of wisdom sprouts it training hub!!";
console.log(para(text1));


// Task-3
function filterAdults(users) {
    return users.filter(users => users.age > 18);
}
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 }
];
console.log(filterAdults(users)); 



// Task-4
function sortProductsByPrice(products) {
    return products.sort((a, b) => a.price - b.price);
}

const products = [
    { name: 'Apple', price: 2 },
    { name: 'Banana', price: 1 },
    { name: 'Cherry', price: 3 }
];

console.log(sortProductsByPrice(products));



// Task-5
function generateSlug(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
}

const text="Hello World!!!From Wisdom Sprouts!!IT-Training Hub$%";
console.log(generateSlug(text));




// Task-6
function groupWordsByLength(words) {
    return words.reduce((result, word) => {
        const length = word.length;
        if (!result[length]) {
            result[length] = [];
     }
        result[length].push(word);
        return result;
    }, {});
}
const words = ['apple', 'cat', 'dog', 'elephant', 'bat', 'programming','book'];
console.log(groupWordsByLength(words));


// Task-9

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function taskA() {
    const randomDelay = Math.random() * 500 + 500; 
    await delay(randomDelay);
    console.log('Task A completed');
}

async function taskB() {
    const randomDelay = Math.random() * 700 + 700; 
    await delay(randomDelay);
    console.log('Task B completed');
}

async function taskC() {
    const randomDelay = Math.random() * 500 + 500; 
    await delay(randomDelay);
    console.log('Task C completed');
}

async function runTasks() {
    await taskA();
    await taskB();
    await taskC();
    console.log('All tasks completed');
}

runTasks();



