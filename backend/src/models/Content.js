const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  url: String,
  text: String,
  links: [String],
  images: [String],
  queries: [{ query: String, response: String }]
});

const Content = mongoose.model('Content', ContentSchema);

module.exports = Content;