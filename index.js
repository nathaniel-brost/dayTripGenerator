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

let userInput = prompt("Good day to you! We will begin selecting random items for your trip. Which should we choose first? Choose 'Place', 'Food', 'Vehicle', or 'Entertainment'.");
let category = userInput;
console.log(category);
