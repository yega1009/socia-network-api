# Social-network-api

## Link to Deployed Application

<a href="">Walk-through Video</a>

## Description

- The Social Network API is a backend application for a social media platform. 
- This backend application is built using Node.js, Express.js, and MongoDB with the Mongoose ODM.
- This API handles a variety of operations that are typical in social networking websites, where users share thoughts, react to other user's thoughts, and maintain a friend list.
- The API uses a NoSQL database and MongoDB to  manage large amounts of data.

## Usage

Starting the Application
- Install and run MongoDB on your system.
- Clone the repository to your local machine.
- Run npm install to install all dependencies.
- Use node index.js to start the server.
- The server will start on http://localhost:3001 by default.

API ENDPOINTS

USERS
- GET `/api/users`: Retrieve all users.
- GET `/api/users/:userId`: Retrieve a single user by ID with their thoughts and friend list.
- POST `/api/users`: Create a new user. Requires a JSON body with username and email.
- PUT `/api/users/:userId`: Update a user by ID. Requires a JSON body with fields to be updated.
- DELETE `/api/users/:userId`: Delete a user by ID and their thoughts.

FRIENDS
- POST `/api/users/:userId/friends/:friendId`: Add a friend to a user's friend list.
- DELETE `/api/users/:userId/friends/:friendId`: Remove a friend from a user's friend list.

THOUGHTS
- GET `/api/thoughts`: Retrieve all thoughts.
- GET `/api/thoughts/`:thoughtId: Retrieve a single thought by ID.
- POST `/api/thoughts`: Create a new thought. Requires a JSON body with thoughtText, username, and userId.
- PUT `/api/thoughts/:thoughtId`: Update a thought by ID. Requires a JSON body with fields to be updated.
- DELETE `/api/thoughts/:thoughtId`: Delete a thought by ID.

REACTIONS
- POST `/api/thoughts/:thoughtId/reactions`: Add a reaction to a thought. Requires a JSON body with reactionBody and username.
- DELETE `/api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction from a thought.

TESTING API ENDPOINTS
- Use an API testing tool like Insomnia or Postman to interact with the API.

SEEDING
- Run node utils/seed.js to seed the database with initial data.

## Installation

N/A

## Contribution

N/A

## Tests

N/A

## License

This project is covered under the [MIT](https://opensource.org/licenses/MIT) license.

## Questions

For any questions, please reach out to me at the following:

- [GitHub Profile](https://github.com/yega1009)
- Email: yega1009@gmail.com
