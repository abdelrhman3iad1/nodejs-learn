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
console.log("*********************************8");

