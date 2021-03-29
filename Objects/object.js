//=> Object Basics exercise:https://www.rithmschool.com/courses/javascript/javascript-objects-object-basics

// Create an object that has your firstName, lastName, and occupation as keys.
// Access each value from your object using both dot notation and bracket notation.
// Add a key for hobby to your object. Remove the key and value for occupation.

let obj={
    firstName: "Sara",
    lastName:"Williams",
    occupation:"Social Media Influencer"
};

//Accessing elements using dot notation:
obj.firstName;
obj.lastName;
obj.occupation;

//Accessing values using bracket notation:
obj["firstName"];
obj["lastName"];
obj["occupation"];

obj.hobby="Reading";
delete obj.occupation;

// => Main exercise:https://www.rithmschool.com/courses/javascript/javascript-objects-exercises
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");

// Change the difficulty to the value of 7.
programming.difficulty=7;

// Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;

// Write the command to add a new key called isFun and a value of true to the programming object.
programming.isFun="true";

// Using a loop, iterate through the languages array and console.log all of the languages.
for(let i=0;i<programming.languages.length; i++){
    console.log(programming.languages[i]);
}
// Using a loop, console.log all of the keys in the programming object.
for(let key in programming){
    console.log(key);
}
// Using a loop, console.log all of the values in the programming object.
for(let value in programming){
    console.log(programming[value]);
}


