/*global Romnote, Backbone*/

Romnote.Models = Romnote.Models || {};

(function () {
    'use strict';

    Romnote.Models.NoteContent = Backbone.Model.extend({
        url: function () {
            return '/api/notebooks/' + Romnote.State.notebookId + '/notes/' + Romnote.State.noteId;
        },

        initialize: function() {
        },

        defaults: function () {
            return {
                content: { text: '' }
            };
        },

        validate: function() {
        },

        parse: function(response)  {
            return response;
        }
    });

})();
