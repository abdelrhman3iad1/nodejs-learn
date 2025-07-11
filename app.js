// Hello nodejs
/**************************************************      */


// video 3 - 8
/*
var data = 5 , dAta = 6;
var result = data + dAta;
console.log( data , dAta , result );
console.log("**************************************************");

var x = 10;
var result2 = ++x;
console.log(result2);
console.log("**************************************************");

console.log((5*2) + 6**3 * 2);
console.log("**************************************************");

x += data;
console.log(x);
console.log("**************************************************");
*/

// video 9 - 10
/*
console.log("xav"<"333");
console.log("xav"<"xavs");
console.log("**************************************************");
var x = 2,z=3;
function test() {
    return true;
}
console.log( x==z && test());
console.log( x==z || test());
console.log("**************************************************");
*/

// video 11 - 16
/*
var x = 1,z=2;
if (x == z) {
    console.log("x is equal to z");
}else if (x>z) {
    console.log("x is greater than z");
}else {
    console.log("x is less than z");
}
console.log("**************************************************");
var x = 2;
{
    console.log(x);
    var x = 3;
}
function test() {
    var x = 5;

    console.log(x);

}
test()
console.log(x);
const data = 8;

{
    console.log(data);  

    // const data = 10;
}
function test() {

    console.log(data);

}
test()
{

    let x = 2;
}
    let x = 5;

    console.log(x);
function test() {

    console.log(x);

}
test()
*/

// video 17 - 18
/*
for(let i = 0; i <= 6; i+=2) {
    console.log(i);
}
*/


// video 19 - 21

/*console.log(data);
var data = 5;
data = 5;
console.log(data);
var data ;
data = 5;
console.log(data);
let data;
let data = [1,2,3,4,5,6,7,8,9,10];
let data2 = new Array(10);
let data3 = new Array();
data.push(11);
data.pop();
data.unshift(0);
data.shift();
console.log(data);
*/


// video 22 - 23
/*
function addNumber1(num1,num2){
    return num1+num2;
}
const addNumber2 = function(num1,num2){
    return num1+num2;
} 
const addNumber3 = (num1,num2)=> {
    return num1+num2;
} 
const addNumber4 = function(num){
    let result = [];
    for(let i = 0 ; i < arguments.length;i++){
        result += arguments[i];
    }
    return result;
}
console.log(addNumber4(5,8,9,7,5));

let colors = ['red','green','blue'];
let colors2 = ['purple','black','orange'];
colors.splice(1,1);
let colorsStr = colors.join('-');
console.log(colorsStr);

let colors3 = colors.concat(colors2);
console.log(colors3);


console.log(colors3.includes('green'));
console.log(colors3.includes('greeN'));

console.log(colors3.indexOf('greeN'));
console.log(colors3.indexOf('green'));
console.log(colors3.lastIndexOf('green'));
*/

// video 24 - 25
/*
let obj = {
    name:'',
    age:22,
    isMarried:false,
    hobbies: ['reading', 'gaming', 'coding'],
    fees:function(){
        return this.age + 100;
    },
};
obj.name = 'xav';
console.log(obj.fees());
console.log(obj);
console.log("*********************************8");

const create_object = (name , motor , model) => {
    let car = {
        name : name,
        motor : motor,
        model : model,
    };
    return car ;
};

let car = create_object('BMW','V8','2023');
console.log(car);
console.log("*********************************8");

function Car (name , motor , model){
    year = 2023;
    this.name = name;
    this.motor = motor;
    this.model = model;
    this.getYearInfo = () => {
        return `${year}`;
    }
}
let bmw = new Car('BMW','V10','2025');
console.log(bmw);
console.log(bmw.getYearInfo());
// console.log(bmw.year);
console.log("**********************************8");
*/

// video 27 - 31

/**
 * undefined / null is a primitive datatypes and primitive values 
 *  undefined is passed automatically to (un)intialized variable
 *  null is passed manually by user to empty variables
 * 
 * null == undefined true
 * null === undefined false ( after type casting )
 * 
 * different types but same value
 */
/*
console.log( null == undefined);
console.log( null === undefined);
*/
/**
 * to check if variable is not empty usually use 
 *      if( x !== undefined && x !== null )
 */

/*
let x = 5.9868;
console.log(x.toFixed(5)); 
// Object Type Coercion: looks variable x belongs to which Object and makes the variable 
// takes instance from it
// Object coersion : includes type casting,using the constructor func
// this line as same as : let x = new Number(5.9868);

console.log(Number.parseFloat(x).toFixed(5));

console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log( Number.MAX_VALUE); //1.7976931348623157e+308
console.log( Number.MAX_SAFE_INTEGER); //9007199254740991
console.log( Number.NaN == Number.NaN ); // False
console.log( Number.NaN === Number.NaN ); // False
// AND MANY CONSTANT VALUES IN THE CONSTRUCTOR FUNCTION/OBJECT

console.log(Number.isInteger(5));

console.log(Number.isNaN(5));//false
console.log(Number.isNaN(undefined));//false
console.log(Number.isNaN("hha"));//false

console.log(Number.isNaN(null));//false
console.log(Number.isNaN("5"));//false
// AND MANY Functions IN THE CONSTRUCTOR FUNCTION/OBJECT
*/
/*
console.log(isNaN(undefined)); //true // With Type CASTING 
console.log(isNaN("5")); //false // With Type CASTING 
console.log(isNaN("hha")); //true //With Type CASTING 
*/
/***
 * There is functions 
 *      - excute it with Number. Object directly 
 *      - excute it with Variable took instance from Number Object/Object coercion 
 */


/**
 * Math Object
 * All its properties and methods are static
 * only : Math.#
*/
/*
console.log( Math.abs(-5) );
console.log( Math.ceil(135.55) );
console.log( Math.floor(135.44) );
console.log( Math.round(135.44) );
console.log( Math.max(135 , 15 , 77) );
console.log( Math.min(135 , 15 , 77) );
console.log( Math.pow(2,5) );
console.log( Math.floor(Math.random() * 100) );
*/
