/*global Romnote, Backbone*/

Romnote.Models = Romnote.Models || {};

(function () {
    'use strict';

    Romnote.Models.NoteContent = Backbone.Model.extend({
        urlRoot: function () {
            return '/api/notebooks/' + Romnote.State.notebookId + '/notes/';
        },

        url: function () {
            return Romnote.State.isInDraftMode ? this.urlRoot() : this.urlRoot() + Romnote.State.noteId;
        },

        idAttribute: '_id',

        initialize: function() {
        },

        defaults: function () {
            return {
                title: 'Default title',
                content: { text: 'Default text' }
            };
        },

        validate: function() {
        },

        parse: function(response)  {
            return response;
        }
    });

})();
