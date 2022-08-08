console.log("Hello World!\n==========\n");

// Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");
 
// for(let i = 0; i <100; i++){
//     if(i % 2== 0){
//       continue;
//     }
//     else{
//         console.log(i);
//     }
// }

// Exercise 2 Section


console.log("EXERCISE 2:\n==========\n");

// let f = "FIZZ"
// let b = "BUZZ"

// for(let i = 0; i <100; i++){

//     if (i % 3==0 && i % 5==0){
//         console.log(i+f+b);
//     }
//      if(i % 3==0){
//         console.log(i+f);
//     }
//     else if(i % 5 ==0){
//         console.log(i+b);
//     }
    
//     else{
//         console.log(i);
//     }
// }

console.log("EXERCISE 3:\n==========\n");

// let i = 1;

// do {
//     if(x%2 !=0){
//         console.log(i);
//     }
//     x++;

// }while(x<100);


// ---------------------------

// let i = 1;

// while(i < 100){
//     if(i % 2 != 0){
//         console.log(i);
//     }
//     i++
// }


// ----------------------------




// let i =1;

// do{
//     let output = "";    
//      if(i % 3 == 0){
//         output += "Fizz";
//     }
//     if (i % 5 == 0){
//         output += "Buzz";
//     }

//     console.log(`${i} ${output}`);
//     i++;
// } while(i <= 100);



// ----------------------------


// let output = "" 
// let i = 0 // declare a counter variable for the loop 
// while(i <= 100) { // run code between {} only while condition is true 
//    // if dividing i by 3 and 5 yields remainder of zero 
//    // number is divisible by both 3 and 5 
//    if(i % 3 == 0 && i % 5 == 0) { 
//       output += i + " Fizz-Buzz" 
//    // else if number is divisible only by 3 
//    } else if(i % 3 == 0) {  
//       output += i + " Fizz" 
//    // else if number is divisible only by 5 
//    } else if(i % 5 == 0) { 
//       output += i + " Buzz" 
//    } 
//    i++ // increment the counter variable 
// } 
// console.log(output);


console.log("EXERCISE 4:\n==========\n");

// let numberToFind = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
// let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

// for(let i =1; i <=n; i++){
//     if(i == numberToFind){
//     console.log(`Found ${numberToFind}!`);
//     break;}
//     if(i==n){
//     console.log(`Did not find ${numberToFind} within 1-${n}!`);
//     }
// }


console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= end; i++){

    let output = "";
    
    if (i % fizzDivisor== 0){
        output += "FIZZ";
    }

    if (i % buzzDivisor==0){
        output += "BUZZ"
    }

    console.log(`${i} ${output}`);
}

console.log(fizzDivisor,buzzDivisor);