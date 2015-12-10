var express = require('express');
var NotebookModel = require('../../models/notebook');
var NoteModel = require('../../models/note');

var router = express.Router();

router.get('/api/notebooks/:id1/notes', readNotes);
router.post('/api/notebooks/:id1/notes', createNote);
router.get('/api/notebooks/:id1/notes/:id2', readNote);
router.put('/api/notebooks/:id1/notes/:id2', updateNote);
router.delete('/api/notebooks/:id1/notes/:id2', deleteNote);

function readNotes(req, res, next) {
  NoteModel.getNotesOf(req.params.id1, function (data) {
    res.json(data);
  });
}

function createNote(req, res, next) {
  console.log('creating');
  req.body.notebookId = req.params.id1;
  NoteModel.create(req.body, function (err, savedNote) {
    if (!err) {
        res.json(savedNote);
    }
  });
}

function readNote(req, res, next) {
    NoteModel
      .findById(req.params.id2, function(err, doc) {
        res.send(err ? {} : doc);
      });
      
}

function updateNote(req, res, next) {
    console.log(5);
    NoteModel.update({_id: req.params.id2}, req.body, function (err, updatedNote) {
        console.log(5);
        if(!err) {
            res.send(updatedNote);
        }
    });
}

function deleteNote(req, res, next) {
    NoteModel.remove({_id: req.params.id2}, function (err) {
        if (!err) {
            res.sendStatus(204);
        }
    });
}

module.exports = router;
