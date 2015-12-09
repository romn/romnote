var express = require('express');
var NotebookModel = require('../../models/notebook');

var router = express.Router();

router.get('/api/notebooks', readNotebooks);
router.post('/api/notebooks', createNotebook);
router.put('/api/notebooks/:id', updateNotebook);
router.delete('/api/notebooks/:id', deleteNotebook);

function readNotebooks(req, res, next) {
    NotebookModel.getNotebooks(function (data) {
        res.json(data);
    });  
}

function createNotebook(req, res, next) {
    var newEntry = new NotebookModel(req.body);
    newEntry.save(function (err, savedEntry) {
        if (!err) {
            res.json(savedEntry);
        }
    });
}

function updateNotebook(req, res, next) {
    NotebookModel.update({_id: req.params.id}, req.body, function (err) {
        if(!err) {
            res.sendStatus(204);
        }
    });
}

function deleteNotebook(req, res, next) {
    NotebookModel.remove({_id: req.params.id}, function (err) {
        if (!err) {
            res.sendStatus(204);
        }
    });
}

module.exports = router;
