const User = require('./User');
const Thought = require('./Thought');
// No need to require Reaction because it's not a model by itself, but a subdocument schema.

module.exports = { User, Thought };
