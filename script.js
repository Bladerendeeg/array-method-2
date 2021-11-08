const array1 = [1,2,3];
const array2 = [4,5,6];
const combineArrays = array1.concat(array2);
// resultaat: [1,2,3,4,5,6]
console.log(combineArrays);

const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}];
    
    function isSuperman(thisisit) {
        return thisisit.name === "Spiderman";
    }
    
    console.log(superheroes.find(isSuperman));
    // Find Spiderman
    // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

const doubleArrayValues = [1, 2, 3];
// result should be [2, 4, 6]
doubleArrayValues.forEach(element => console.log(element*2));

const containsNumberBiggerThan10 = [1, 4, 3, 6, 9, 7, 11]; 
const higher = (element) => element > 10;
console.log(containsNumberBiggerThan10.some(higher));
// result should be true
const containsNumberLessThan10 = [1,2,1,2,1,2];
const lower = (element) => element > 10;
console.log(containsNumberLessThan10.some(lower));
// result should be false


const isItalyInTheGreat7 = ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'];
const italyorno = (element) => element === 'Italy';
console.log(isItalyInTheGreat7.some(italyorno));
// result should be true

const tenfold = [1, 4, 3, 6, 9, 7, 11];
tenfold.forEach(element => console.log(element*10));
// result should be [10, 40, 30, 60, 90, 70, 110]


const isBelow100 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];
const lowerThanhundred = (element) => element < 100;
console.log(isBelow100.every(lowerThanhundred));
// result should be false

const bigSum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(bigSum.reduce(reducer));
// result should be 1118
