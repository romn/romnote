/*global Romnote*/

window.Romnote = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Utils: {}
};

window.Romnote.init = function () {
    'use strict';

    var notebooksCollection = new Romnote.Collections.Notebook();
    var notebooksView = new Romnote.Views.Notebooks({collection: notebooksCollection});
    notebooksCollection.fetch({reset: true, success: function () {
        document.querySelector('[data-notebooks-container-id="01"]').appendChild(notebooksView.el);
    }});

    var notesCollection = new Romnote.Collections.Note();
    var notesView = new Romnote.Views.Notes({collection: notesCollection});
    notesCollection.fetch({success: function () {
        document.querySelector('[data-notes-container-id="01"]').appendChild(notesView.el);
    }});

    /*
    var noteModel = new Romnote.Models.Note();
    var noteView = new Romnote.Views.Note({model: noteModel});
    noteModel.fetch({success: function () {
        document.querySelector('[data-note-container-id="01"]').appendChild(noteView.el);
    }});
    */
};

jQuery(function() {
    'use strict';
    Romnote.init();
});

window.Romnote.Utils.closest = function (elem, selector) {
    'use strict';
    var matchesSelector = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;

    while (elem) {
        if (matchesSelector.bind(elem)(selector)) {
            return elem;
        } else {
            elem = elem.parentElement;
        }
    }
    return false;
};