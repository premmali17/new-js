const marvel_heros =["thor","ironman","spiderman"];
const dc_heros =["batman","flash","superman"];

//now we gonna push dc heros in mavel heros
//marvel_heros.push(dc_heros);

//console.log(marvel_heros);

//so with this push function we get the complicate output like it adds 2nd string as separte variable and we dont need this type of output so we use concat 

const allheros = marvel_heros.concat(dc_heros)
// here we conact create whole separate string which gonna contain the two strings like a+b=c
console.log(allheros);


// u can use spread operator too 

const all_new_heros =[...marvel_heros,...dc_heros]
console.log(all_new_heros);


console.log(Array.isArray("prem"));//u can check the its an array or not then if yes then it wil give u boolean value like true or false

console.log(Array.from("prem"));// it converts given data into arrays   

console.log(Array.from({name: "prem"}));// it returns empty brackets like this [] cuz it cant dirctly convert
                      //****interesting****//


let score1 = 100
let score2 = 200
let score3 = 300   

console.log(Array.of(score1,score2,score3)); // returns new array from set of elements
