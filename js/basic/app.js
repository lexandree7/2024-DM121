let name = "Ouroboros"
console.log(`Hello ${name}, welcome!`);

const numberA = 11
const numberB = 27

let total = numberA + numberB

console.log(`The total is ${total}`);

console.log(`The numberA variable is `, typeof numberA)

//prettier-ignore
const nameList = [
    `Ouroboros`,
    `Luffy`,
    `Goku`,
    `Saitama`
]

function print(text){
    console.log(text);
}

function fancyPrint(text){
    console.log(`--->💀 ${text} 💀 <----`);

}

const toUpper = (text) => text.toUpperCase();

nameList
    .sort()
    .reverse()
    .map(toUpper)
    .forEach(fancyPrint);

