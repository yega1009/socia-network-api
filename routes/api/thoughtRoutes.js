const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// Routes for getting all thoughts and adding a new thought
router.route('/').get(getAllThoughts).post(addThought);

// Routes for getting, updating, and deleting a single thought by ID
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// Routes for adding a reaction to a thought and deleting a reaction
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;

