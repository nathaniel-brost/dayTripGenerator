"use strict"

console.log("Hello Nate!");
console.log("Hello Nate!");
console.log("Hello Nate!");
console.log("Hello Nate!");
console.log("Hello Nate!");
console.log("Hello Nate!");
console.log("Hello Nate!");
console.log("Hello Nate!");
console.log("Hello Nate!");
console.log("Hello Nate!");

// part 1, 2, 3, 4 will be similar. 
// create arrays with options for places, restaurants, transport, entertainment
// create prompt "Enter either 'Locale; Food; Vehicle; or Entertainment'"
// create functions for each, to return a random result from these arrays
// console log the results
// store these as an array
// 
// show prompt "These are your selections: blah, blah, blah, and blah. 
// Are you happy with these results? C to Confirm or N if No"
// If no, prompt asking "Which should we reselect at this moment? L, F, V, or E?"
// When user input = C for Confirm, console log these results


let destOptions = ['Chicago', 'Los Angeles', 'Atlantic City', 'Austin', 'Manhattan', 'Rome', 'Madrid', 'Seattle', 'Egypt', 'Nashville', 'Hong Kong', 'Hamburgh', 'Kingston'];
let foodOptions = ['La Brioche', 'Jimmy Johns', 'Dive Bar', 'Taco Truck', 'Burger King', 'Pizzeria', 'Candy Shop', 'Hidden Cafe', 'Bougie Diner', 'Mom and Pop Shop', 'Airport Cafe'];
let transOptions = ['Rental Car', 'Uber/Lift', 'Red Bike Rental', 'Pedalcart', 'Trolley', 'Subway', 'Train', 'My Legs!', 'Double-Decker Bus'];
let enterOptions = ['Opera', 'Street Music', 'Jazz Club', 'Cirque du Soleil', 'Street Magicians', 'Movie', 'Floating Lanterns', 'Fireworks', 'Parade', 'Comic Convention'];

// let placeBox;
// let foodBox;
// let transBox;
// let tainBox;
let item; 
let list = [];

// function placer(destOptions){
//     return destOptions[Math.floor(Math.random()*destOptions.length)];
// }

// function fooder(foodOptions){
//     return foodOptions[Math.floor(Math.random()*foodOptions.length)];
// }

// function goer(transOptions){
//     return transOptions[Math.floor(Math.random()*transOptions.length)];
// }

// function tainer(enterOptions){
//     return enterOptions[Math.floor(Math.random()*enterOptions.length)];
// }

// let component = [];
function picker(component){
    return component[Math.floor(Math.random()*component.length)];
}

alert("Good day to you! We will begin selecting random items for your trip. Press enter when you're ready!");
item = picker(destOptions);
list.push(item);
item = picker(foodOptions);
list.push(item);
item = picker(transOptions);
list.push(item);
item = picker(enterOptions);
list.push(item);                 


// put lines 39-52 into a function and call the function

console.log("Here are your random selections for location, food, transportation, and entertainment today:");
console.log(list);
let userInput1;
let userInput2;
let complete;


while (complete != "yes"){
    userInput1 = prompt("Below are your options. Are you happy with your results? C to Confirm, or R to Rerun");

    if (userInput1=="C"){
        console.log("Congratulations! Your random day-trip selection process is now complete!");
        complete = "yes";
    }
    else if (userInput1 != "C"){

        userInput2 = prompt("Which would you like to rerun? Type 'P' for Place, 'F' for Food, 'V' for Vehicle, or 'E' for Entertainment.")
        if (userInput2=="P"){
            item = picker(destOptions);
            list.splice(0, 1, item);
        }
        else if (userInput2=="F"){
            item = picker(foodOptions);
            list.splice(1, 1, item);
        }
        else if (userInput2=="V"){
            item = picker(transOptions);
            list.splice(2, 1, item);
        }
        else if (userInput2=="E"){
            item = picker(enterOptions);
            list.splice(3, 1, item);            
        }
        else {
            prompt("Whoopsie, that is not a valid category");
        }
        console.log(list);
    }
}
console.log(`You will be heading to ${list[0]} and your main mode of transportation will be ${list[2]}.`);
console.log(`Enjoy the fine local cuisine at ${list[1]}.`);
console.log(`While you are there, also have a wonderful time seeing a ${list[3]}!`);

