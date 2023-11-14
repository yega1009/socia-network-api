const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// Routes for getting all users and creating a new user
router.route("/").get(getAllUsers).post(createUser);

// Routes for getting, updating, and deleting a single user by ID
router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser);

// Routes for adding and removing a friend to/from a user's friend list
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
