//Example 1: Without return
function add(a, b) {
  console.log(a + b); // just shows it
}

add(3, 4); // prints 7, but you can't use the 7 anywhere


//Here, the result (7) is only shown on screen, not actually given back to you.
//It’s like the vending machine showing your snack through the glass but not dropping it down

//Example 2: With return
function add(a, b) {
  return a + b; // gives back the value
}

let result = add(3, 4);
console.log(result); // now we can use 7
console.log(result * 2); // we can still use it => 14


//Here, return hands back the value so you can store it, reuse it, or do more things.


//--------------------------***-----------------------------------\\

//--Super Simple Analogy--\\

//console.log = just telling you the answer.

//return = actually giving you the answer, so you can keep it in your pocket.

function heyme(a,b){
    console.log(a+b);
    
}
heyme(3,5)