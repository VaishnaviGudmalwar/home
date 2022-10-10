// const letters = ["a","b","c","d","e","c",3];
// const obj ={};
const numbers = [2, 4, 6, 8, 10, 12,3,33,22];

console.log(numbers.fill("a",4,8));

// console.log(letters.push("f","g"));
// console.log(letters);
//  const newletters = letters.push("f","g");
// console.log(newletters);
// console.log(letters.pop());
// console.log(letters.shift());
// console.log(letters.unshift("A","B","C"));
// console.log(letters);
//console.log(letters.indexOf("c"));
// console.log(letters.includes("C"));
// console.log(letters.concat([1,2,3],[4,5,6]));
// console.log(letters.reverse());
// console.log(letters.join("-"));
// console.log(Array.isArray(obj));
// console.log(letters.toString());
// console.log(letters.find((function (item){
//     return item === "z";
// }))
// );
// console.log(letters.find((function (item,index){
//     if (item === "c"){
//         console.log(index);
//     }
//     ;
// }))
// );

// const newArray = letters.findIndex(function (item){
//     return item === "c";
// });
// console.log(newArray);
// const newArray = letters.some(function (item){
//     return item === "z";
// });
// console.log(newArray);
// const newArray = numbers.some(function (item){
//     return item % 2 !== 0;
// });
// const newArray = numbers.every(function (item){
//     return item % 2 === 0;
// });
// const newArray = numbers.slice(2 , 5);
// const newArray = numbers.splice(2 , 2,"c","d");
// console.log(newArray,"--->",numbers);
// const products = [
//     {id: 1, brand: "Nike",title: "shoes", size: 8, color:"Black", price: 5000},
//     {id: 2, brand: "Puma",title: "flippers", size: 9, color:"black" , price: 5000},
//     {id: 3, brand: "Adidas",title: "slippers", size: 10, color:"white" ,price: 5000},
//     {id: 4, brand: "Woodland",title: "sandles", size: 7, color:"green",price: 5000},
//     {id: 5, brand: "aldo",title: "shoes", size: 8, color:"yellow", price: 5000},
//     {id: 6, brand: "nike",title: "boots", size: 9, color:"orange", price: 5000},
//     {id: 7, brand: "puma",title: "socks", size: 10, color:"White",price: 5000},
// ];
// const output = products.filter(function (item) {
//     return item.size === 8 && item.color === "yellow";
// });
// const output = products.map(function (item) {
//      if(item.size === 9){
//         item.size = 9.5;
//      }
//      return item;
// });
// const output = products.map(function (item) {
//      item.price = item.size * 500;
//      item.size = 10;
//      return item;
// });

// const output = products.reduce(function (acc, cur){
//   return acc + cur.price;
// }, 0);
console.log(output);

// const sorted = products.sort(function (abc,xyz)  {
//     if (abc.brand.toLowerCase() > xyz.brand.toLowerCase()) {
//         console.log("-1");
//         return -1;   
//     } else {
       
//        console.log("1");
//        return 1;
//     }
// });

// const sorted = products.sort(function(a , b){
// if (a.brand.toLowerCase > b.brand.toLowerCase) {
//     return 1;
// }else{
//     return -1;
// }
// });
// console.log(sorted);

// const forEached = products.forEach( (item) {
//     console.log(item.price / 2);
// });
// console.log(forEached);
// const total = products.filter(function  (item) {
//     return (
//         item.brand ==="Nike" ||
//         item.brand ==="nike" ||
//         item.brand ==="Puma" ||
//         item.brand ==="puma"
//     );
// }) .map(function(item){
//     return (item.price / 5) * 4;
// }) .reduce(function (acc,cur){
//     return acc + cur;
// });
// console.log(total);

//method chaining:
// const total = products.filter(function (element){
//     return element.brand === "Adidas" ||
//            element.brand === "Woodland" ||
//            element.brand === "aldo" ;
// }) .map(function(element){
//     return (element.price / 10 ) * 11;
// }) .reduce(function(acc,cur){
//     return acc + cur;
// });
// console.log(total);

// const letters = ['a','b','c','d','e','f','g'];

// function handleMovement (array, index, offset) {
//     if(!Array.isArray(array)){
//      return   console.log(" not a valid array");
//     }
//     const newoffset = index + offset;
//     if(newoffset < 0 || newoffset >= array.length){
//       return  console.log("provide a valid offset value");
//     }
//     const newArr = array;
//     const elem = newArr.splice(index,1)[0];
//     newArr.splice(newoffset, 0, elem);
//     // console.log(elem);
//     return newArr;
// }
// console.log(handleMovement(letters,4,-2));
// console.log("hello"[0]);