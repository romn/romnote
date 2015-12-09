var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  title: String,
  created: Date,
  updated: Date,
  content: {
    text: String,
    link: String
  }
});
var Model;

schema.statics.getNotesOf = function(notebookId, callback) {
  Model
    .find({notebookId: notebookId},'title created updated')
    .exec(function(err, docs) {
      callback(err ? [] : docs);
    });
};

Model = mongoose.model('Note', schema);

module.exports = Model;