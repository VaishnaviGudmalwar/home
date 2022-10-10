const products = [
    {id:1, brand:"Nike" , tittle :"Shoes", size :8 , color :"Black"},
    {id:2, brand:"Puma" , tittle :"Flippers", size :9 , color :"black"},
    {id:3, brand:"Adidas" , tittle :"Slippers", size :10 , color :"white"},
    {id:4, brand:"Woodland" , tittle :"Sandles", size :7 , color :"Green"},
    {id:5, brand:"Aldo" , tittle :"Shoes", size :8 , color :"Yellow"},
    {id:6, brand:"nike" , tittle :"Boots", size :9 , color :"orange"},
    {id:7, brand:"puma" , tittle :"Socks", size :10 , color :"white"}
];
// const output = products.map(function(item){
//     item.size = 9;
//     return item;
// }
// )
// console.log(output);

// const output = products.map(function(item){
//     item.prize = item.size*500;
//     return item;
// }
// )
// console.log(output);

const output = products.map(function(item){
    if(item.size === 9){
        item.size = 11
    }
    return item;
}
)
console.log(output);