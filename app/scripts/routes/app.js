/*global Romnote, Backbone*/

Romnote.Routers = Romnote.Routers || {};

(function () {
    'use strict';

    Romnote.Routers.App = Backbone.Router.extend({
        routes: {
            '': 'handleEverything',
            'notebooks/:notebookId': 'handleEverything',
            'notebooks/:notebookId/notes/:noteId': 'handleEverything'
        },

        handleEverything: function (notebookId, noteId) {
            _.extend(Romnote.State, { 
                notebookId: notebookId, 
                noteId: noteId, 
                isInDraftMode: false 
            });            
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
