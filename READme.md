# Modern JavaScript Syntax Lab 🧠✨

This lab is all about helping you *really* understand some of the modern JavaScript features you’ll be seeing all the time — especially in React and modern web apps.

These are the things you’ll want to feel comfortable with so you’re not second-guessing yourself when you build, teach, or even get quizzed in an interview.

---

## 🚀 What You Practiced

### ✅ 1. `.map()` — Array Transformation
- Use this to loop through an array and change every item into something new.
```js
const doubled = nums.map(num => num * 2);



⸻

✅ 2. Array Destructuring
	•	Pull out values from an array by position.

const [first, second] = toppings;



⸻

✅ 3. Object Destructuring
	•	Pull out values from an object by name.

const { name, age } = user;



⸻

✅ 4. Spread Operator
	•	Use ... to copy or combine stuff.

Arrays:

const newArray = [...oldArray];

Objects:

const newObj = { ...oldObj };



⸻

✅ 5. Dynamic Keys in Objects
	•	When your property name comes from a variable:

const key = 'email';
const obj = { [key]: 'angela@example.com' };



⸻

✅ 6. Default Parameters in Functions
	•	Give your function parameters a backup plan.

function greet(name = 'friend') {
  console.log(`Hi, ${name}!`);
}



⸻

✅ 7. Ternary Operator
	•	A shortcut for if...else when you’re just picking between two values.

const result = age > 18 ? 'Adult' : 'Kid';



⸻

✅ 8. Logical OR (||) for Defaults
	•	If the first value is missing (falsy), use the second.

const theme = userTheme || 'light';



⸻

✅ 9. Optional Chaining (?.)
	•	Safely look deeper into objects without crashing.

const dogName = user?.pet?.name;



⸻

💡 Little Reminders
	•	[ ] is for arrays
	•	{ } is for objects
	•	|| is like “or else…”
	•	?. means “check safely before going deeper”

⸻

🛠 How to Run Your Lab Files
	1.	Make sure you’re in a folder where you want to run your code.
	2.	Start a Node.js project (one time only):

npm init -y

	3.	In your package.json, add:

"type": "module"

	4.	Run your .js files using:

node filename.js



⸻

🌱 Keep Going!
