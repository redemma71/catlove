// require mongoose
let mongo = require("mongoose");
mongo.Promise = require('bluebird');

// Cats schema
// using MongoDB's ObjectId as unique indentifier
const CatsSchema = mongo.Schema({
  catName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ["M","F"],
    required: true
  },
  likesCatnip: {
      type: boolean,
      default: false
  },
  likesDogs: {
    type: boolean,
    default: false
  },
  personality: {
    type: String,
    enum: ["lazy", "active", "destructive", "psychotic"],
    required: true
  }
});

// convert schema to User model and export
const Cat = module.exports = mongo.model('Cat',CatsSchema);