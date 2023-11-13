const User = require('../models/User');
const Thought = require('../models/Thought');

module.exports = {
  // Get all users
  getAllUsers(req, res) {
    User.find({})
      .select('-__v')
      .then(users => res.json(users))
      .catch(err => res.status(500).json(err));
  },

  // Get a single user by ID
  getUserById(req, res) {
    User.findOne({ _id: req.params.id })
      .select('-__v')
      .populate('thoughts')
      .populate('friends')
      .then(user => res.json(user))
      .catch(err => res.status(404).json(err));
  },

  // Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then(user => res.json(user))
      .catch(err => res.status(400).json(err));
  },

  // Update a user by ID
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err));
  },

  // Delete a user by ID and remove their thoughts
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.id })
      .then(user => {
        if (!user) {
          return res.status(404).json({ message: 'No user with this ID' });
        }
        return Thought.deleteMany({ _id: { $in: user.thoughts } });
      })
      .then(() => res.json({ message: 'User and their thoughts deleted!' }))
      .catch(err => res.status(400).json(err));
  },

  // Add a friend to a user's friend list
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err));
  },

  // Remove a friend from a user's friend list
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err));
  }
};
