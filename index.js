"use strict"

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

let placeBox;
let foodBox;
let transBox;
let tainBox;

let list = [];

function placer(destOptions){
    return destOptions[Math.floor(Math.random()*destOptions.length)];
}

function fooder(foodOptions){
    return foodOptions[Math.floor(Math.random()*foodOptions.length)];
}

function goer(transOptions){
    return transOptions[Math.floor(Math.random()*transOptions.length)];
}

function tainer(enterOptions){
    return enterOptions[Math.floor(Math.random()*enterOptions.length)];
}

let userInput = prompt("Good day to you! We will begin selecting random items for your trip. Enter 'Run' when you're ready!");
if (userInput == 'Run'){
    placeBox = placer(destOptions);
    list.push(placeBox);
    foodBox = fooder(foodOptions);
    list.push(foodBox);
    transBox = goer(transOptions);
    list.push(transBox);
    tainBox = tainer(enterOptions);
    list.push(tainBox);                 
}

console.log(placeBox);
console.log(foodBox);
console.log(transBox);
console.log(tainBox);
console.log(list);
let userInput3;
let userInput2 = prompt("Below are your options. Are you happy with your results? C to Confirm, or R to Rerun");
if (userInput2=="C"){
    console.log("Congratulations! Your random day-trip selection process is now complete!");
}
else {
    userInput3 = prompt("Which would you like to rerun? Type 'Place', 'Food', 'Vehicle', or 'Entertainment'. ")
}
// console.log(userInput3);
if (userInput3=="Place"){
    placeBox = placer(destOptions);
    list.splice(0, 1, placeBox);
}
else if (userInput3=="Food"){
    foodBox = fooder(foodOptions);
    list.splice(1, 1, foodBox);
}
else if (userInput3=="Vehicle"){
    transBox = goer(transOptions);
    list.splice(2, 1, transBox);
}
else if (userInput3=="Entertainment"){
    tainBox = tainer(enterOptions);
    list.splice(3, 1, tainBox);
}
else {
    prompt("Whoopsie, that is not a valid category");
}
console.log(list);
