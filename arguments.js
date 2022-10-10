let x = 1;
x = "a";
function sum (a,b) {
    //return 11+4;
    return a+ b;
}
// console.log (sum (2, 5, 6, 7));
//console.log (sum (2,5));

function getSum (){
    console.log (arguments); /// argument is an object
    for(let values in arguments){
        console.log(arguments[values]); /// key's value output
    }
}
console.log(getSum(5,4,7,8));