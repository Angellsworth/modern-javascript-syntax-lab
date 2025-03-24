// =========================
// ! Exercise 1: map()
// =========================
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// a & b: Create new array with each value multiplied by 2
const numsTimesTwo = nums.map((num) => {
  return num * 2;
});

// c: Log the new array
console.log(numsTimesTwo);

// =========================
// ! Exercise 2: Array destructuring
// =========================
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// a: Destructure first and second values
const [firstIngredient, secondIngredient] = pizzaToppings;

// b: Log both variables
console.log(firstIngredient);
console.log(secondIngredient);

// =========================
// ! Exercise 3: Object destructuring
// =========================
const car = {
  make: 'Audi',
  model: 'Q5',
};

// a & b: Destructure and log
const { make, model } = car;
console.log(make);
console.log(model);

// =========================
// ! Exercise 4: Spread operator (arrays)
// =========================
const morePizzaToppings = ['Cheese', 'Sauce'];

// a & b: Duplicate and log
const uncontroversialPizzaToppings = [...morePizzaToppings];
console.log(uncontroversialPizzaToppings);

// =========================
// ! Exercise 5: Spread operator (objects)
// =========================
const anotherCar = {
  make: 'Toyota',
  model: 'RAV4',
};

// a: Duplicate object
const myCar = { ...anotherCar };

// b: Modify properties
myCar.make = 'Subaru';
myCar.model = 'Outback';

// c: Log both
console.log(anotherCar);
console.log(myCar);

// =========================
// ! Exercise 6: Dynamic object key
// =========================
const propertyName = 'email';

// b & c: Create object using dynamic key
const userProfile = {
  [propertyName]: 'angela@email.com',
};

// d: Log object
console.log(userProfile);
// =========================
// ! Exercise 7: Import and Export
// =========================

// =========================
// ! Exercise 8: Default parameters
// =========================
function describeAnimal(noun = 'cat', adjective = 'orange') {
  console.log(`The ${noun} is ${adjective}.`);
}

// Call function
describeAnimal();

// =========================
// ! Exercise 9: Ternary operator
// =========================
const pizza = 'tasty';

// a: Convert if/else to ternary
console.log(pizza === 'tasty' ? 'yum' : 'yuck');

// =========================
// ! Exercise 10.1: Logical OR (language fallback)
// =========================
const localLangConfig = null;

// a–d: Assign default language
const lang = localLangConfig || 'en';
console.log(lang);

// =========================
// ! Exercise 10.2: Logical OR (theme fallback)
// =========================
const savedUserTheme = null;

// a–c: Assign default theme
const theme = savedUserTheme || 'light';
console.log(theme);

// =========================
// ! Exercise 11: Optional chaining
// =========================
const adventurer = {
  name: 'Alice',
};

// a: Use optional chaining to prevent error
console.log(adventurer.cat?.age);