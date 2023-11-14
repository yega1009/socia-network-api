const connection = require("../config/connection");
const { User, Thought } = require("../models");
const {
  getRandomArrItem,
  getRandomName,
  getRandomThought,
  getRandomEmail,
} = require("./data");

// Handle connection errors
connection.on("error", (err) => err);

// Seed the database once the connection is open
connection.once("open", async () => {
  console.log("connected");

  // Clear existing data
  await User.deleteMany({});
  await Thought.deleteMany({});

  // Create arrays to store generated user and thought data
  const users = [];
  const thoughts = [];

  // Generate sample user data
  for (let i = 0; i < 10; i++) {
    const username = getRandomName();
    const email = getRandomEmail(username);

    // Push the new user object into the users array
    users.push({ username, email });
  }

  // Generate sample thought data
  for (let i = 0; i < 5; i++) {
    const thoughtText = getRandomThought();
    const username = getRandomArrItem(users).username;

    thoughts.push({ thoughtText, username });
  }

  // Seed the User and Thought collections with the generated data
  await User.insertMany(users);
  await Thought.insertMany(thoughts);

  console.log("Database seeded!");
  process.exit(0);
});
