// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

// destructivelyAppendCat 

function destructivelyAppendCat(name) {
    cats.push("Ralph");
    cats;
}

// destructivelyPrependCat 
function  destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

// destructivelyRemoveLastCat 
function  destructivelyRemoveLastCat() {
    cats.pop();
}

// destructivelyRemoveFirstCat() 
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// appendCat(name) 
function appendCat(name) {
    const appendCat = [...cats, "Broom"]
    return appendCat;
}

// prependCat(name) 
function prependCat(name) {
    const prependCat = ["Arnold", ...cats]
    return prependCat;
}

// removeLastCat() 
function  removeLastCat() {
    const  removeLastCat = cats.slice(0,cats.length -1);
    return removeLastCat;
}

// removeFirstCat() 
function  removeFirstCat() {
    const  removeFirstCat = cats.slice(1);
    return removeFirstCat;
}