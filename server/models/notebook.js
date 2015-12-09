var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: String
});
var Model;

schema.statics.getNotebooks = function(callback) {
  Model
    .find({},'name')
    .exec(function(err, docs){
      callback(err ? [] : docs);
    });
};

Model = mongoose.model('Notebook', schema);

module.exports = Model;
