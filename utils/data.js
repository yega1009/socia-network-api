const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Hannah",
  "Ivan",
  "Judy",
  "Kyle",
  "Laura",
  "Mallory",
  "Nick",
  "Olivia",
  "Peggy",
  "Quinn",
  "Rick",
  "Steve",
  "Trudy",
  "Uma",
  "Victor",
  "Wendy",
  "Xavier",
  "Yvonne",
  "Zach",
];

const thoughtTexts = [
  "This is a great day!",
  "Learning MongoDB is fun.",
  "I love coding in JavaScript.",
  "Mongoose makes life easier.",
  "API development is intriguing.",
  "Node.js is awesome!",
  "Express.js simplifies server creation.",
  "Coding is a journey of constant learning.",
  "NoSQL databases are flexible and powerful.",
];

// Get a random item from an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Generate a random name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Generate a random thought text
const getRandomThought = () => getRandomArrItem(thoughtTexts);

// Generate random email address
const getRandomEmail = (name) =>
  `${name.split(" ")[0].toLowerCase()}${Math.floor(
    Math.random() * 100
  )}@example.com`;

module.exports = { getRandomArrItem, getRandomName, getRandomThought, getRandomEmail };
