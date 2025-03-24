# Modern JavaScript Syntax Lab

This lab explores modern JavaScript features including array methods, destructuring, spread operator, dynamic keys, default parameters, ternary operators, logical operators, and optional chaining.

---

## 🧠 Key Concepts to Remember

### 1. `.map()` Method
- Used to transform each item in an array.
```js
const numsTimesTwo = nums.map(num => num * 2);

2. Array Destructuring
	•	Pull values from an array into variables.

const [first, second] = array;

3. Object Destructuring
	•	Pull properties from an object into variables by matching key names.

const { key } = object;

4. Spread Operator (...)
	•	Arrays: Copy or combine arrays.

const newArray = [...oldArray];

	•	Objects: Copy or extend objects.

const newObj = { ...oldObj };

5. Dynamic Keys in Objects
	•	Use a variable as a property name.

const key = 'email';
const obj = { [key]: 'value' };

6. Default Parameters in Functions
	•	Provide fallback values if arguments are missing.

function greet(name = 'friend') { ... }

7. Ternary Operator
	•	Shorter syntax for if...else.

condition ? valueIfTrue : valueIfFalse;

8. Logical OR (||) for Defaults
	•	Assign default values if the first one is falsy.

const value = userInput || 'default';

9. Optional Chaining (?.)
	•	Safely access nested properties without crashing.

const name = user?.profile?.firstName;



⸻

💡 Study Tip

Ask yourself:
	•	Is this data an array ([ ]) or an object ({ })?
	•	Could this value be missing?
	•	Am I transforming, accessing, or protecting the data?

⸻

✅ Run This Lab
	1.	Make sure you’re using Node.js
	2.	Initialize your project:

npm init -y

	3.	Add this to your package.json:

"type": "module"

	4.	Run each exercise file with:

node filename.js



⸻

🚀 Keep Practicing

Mastering these basics sets you up for:
	•	React
	•	API calls (like fetch)
	•	Frontend frameworks
	•	Clean, readable code
