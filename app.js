
// ! Exercise 1:
// Starting code (don't modify this):
// a. Use the `map()` method to iterate over the provided `nums` array
// b. Use the callback function of the `map()` method you wrote to
//    create a new array where each value is multiplied by 2.
//    Name the new array `numsTimesTwo`.
// c. Console log the new array.
const nums = [13, 87, 2, 89, 12, 4, 90, 63];
const numsTimesTwo = nums.map((num) => {
    return num * 2;
});
console.log(numsTimesTwo);

// ! Exercise 2:
// Starting code (don't modify this):
// a. Given the provided `pizzaToppings` array, use destructuring to extract 
//    the first and second values and place them into variables. Name the 
//    variable that corresponds to the first value `firstIngredient`. Name the 
//    variable that corresponds to the second value `secondIngredient`.
// Your code here:
// b. Console log the `firstIngredient` and `secondIngredient` variables.
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [firstIngredient, secondIngredient] = pizzaToppings;
console.log(firstIngredient);
console.log(secondIngredient);

// ! Exercise 3:
// a. Given the provided `car` object, use destructuring to create two
//    variables: `make` and `model` that will hold the respective values.
// b. Console log the `make` and `model` variables. 
// Starting code (don't modify this):
const car = {
    make: 'Audi',
    model: 'Q5',
};
const { make, model } = car;
console.log(make);
console.log(model);

// ! Exercise 4: 
// a. Duplicate the provided `morePizzaToppings` array using the spread 
//    operator and assign it to a variable named `uncontroversialPizzaToppings`.
// b. Console log the `uncontroversialPizzaToppings` variable.
// Starting code (don't modify this):
const morePizzaToppings = ['Cheese', 'Sauce'];
const uncontroversialPizzaToppings = [...morePizzaToppings];
console.log(uncontroversialPizzaToppings);

// ! Exercise 5:
// a. Duplicate the provided `anotherCar` object and spread its values into a 
//    new variable named `myCar`.
// b. Change the `make` and `model` properties of the `myCar` object to new 
//    values.
// c. Console log both objects and observe the results.
// Starting code (don't modify this):
const anotherCar = {
    make: 'Toyota',
    model: 'RAV4',
};
const myCar = { ...anotherCar };
myCar.make = 'Subaru';
myCar.model = 'Outback';
console.log(anotherCar);
console.log(myCar);

// ! Exercise 6:
// a. Define a variable named `propertyName` and assign a string (like 'username', 'age', or 'email') to it.
// b. Create an object named `userProfile`. 
// c. Use `propertyName` as a dynamic key in `userProfile`. Assign it a relevant value.
// d. Console log the `userProfile` object to see the result.
const propertyName = 'email';
const userProfile = {
    [propertyName]: 'angela@email.com'
};
console.log(userProfile);

// ! Exercise 8:
// a. Create a function with two parameters, `noun` and `adjective`.
// b. Give `noun` a default value of "cat" and `adjective` a default value of "orange".
// c. The function should log a sentence 'The cat is orange.' by default, but should substitute the appropriate parameters when it is supplied with arguments.
function describeAnimal(noun = 'cat', adjective = 'orange') {
    console.log(`The ${noun} is ${adjective}.`);
}
describeAnimal();

// ! Exercise 9:
// a. Convert the following `if...else` statement into a ternary:
// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }
// Starting code (don't modify this):
const pizza = 'tasty';
console.log(pizza === 'tasty' ? 'yum' : 'yuck');

// ! Exercise 10:
// ! 10.1: Set language
// a. Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: "lang is equal to localLangConfig or the default value of English."
// b. Create a variable called `lang`.
// c. Assign `lang` the value of localLangConfig or 'en' as a default if `localLangConfig is falsy.
// d. Log the value of `lang` to the console.
const localLangConfig = null;
const lang = localLangConfig || 'en';
console.log(lang);

// ! 10.2: Set website theme
// a. Create a variable called `theme`.
// b. Assign `theme` the value of `savedUserTheme` or 'light' as a default.
// c. Log the value of `theme` to the console.
const savedUserTheme = null; // Change to 'dark', etc., or leave it `null`.
const theme = savedUserTheme || 'light';
console.log(theme);

// ! Exercise 11:
// a. Use optional chaining in a console.log so that a console log of `adventurer.cat.age` returns `undefined` instead of an error.
// Starting code (don't modify this):
const adventurer = {
    name: 'Alice',
};
console.log(adventurer.cat?.age);

