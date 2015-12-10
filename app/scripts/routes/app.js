/*global Romnote, Backbone*/

Romnote.Routers = Romnote.Routers || {};

(function () {
    'use strict';

    Romnote.Routers.App = Backbone.Router.extend({
        routes: {
            '': 'index',
            'notebooks/:notebookId': 'index',
            'notebooks/:notebookId/notes/:noteId': 'index'
        },

        index: function (notebookId, noteId) {
            _.extend(Romnote.State, { notebookId: notebookId, noteId: noteId });            
            this._resetComponents();
        },

        _resetComponents: function () {
            Romnote.Components.Notebooks.reset()
                .then(function () {
                    Romnote.Components.Notes.reset()
                        .then(function(){
                            Romnote.Components.NoteContent.reset();   
                        }); 
                });
        }
    });

})();
