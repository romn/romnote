/*global Romnote, Backbone*/

Romnote.Models = Romnote.Models || {};

(function () {
    'use strict';

    Romnote.Models.Note = Backbone.Model.extend({
        url: function () {
            return '/api/notebooks/' + Romnote.State.notebookId + '/notes/';
        },

        initialize: function() {
        },

        defaults: {
        },

        validate: function() {
        },

        parse: function(response)  {
            return response;
        }
    });

})();
