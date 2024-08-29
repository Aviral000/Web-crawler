const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  url: String,
  text: String,
  links: [String],
  images: [String],
  queries: [{ query: String, response: String }]
});

module.exports = mongoose.model('Content', ContentSchema);
