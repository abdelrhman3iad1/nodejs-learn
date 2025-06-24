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
let data;*/
let data = [1,2,3,4,5,6,7,8,9,10];
let data2 = new Array(10);
let data3 = new Array();
data.push(11);
data.pop();
data.unshift(0);
data.shift();
console.log(data);
