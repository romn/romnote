/*global Romnote, Backbone*/

Romnote.Models = Romnote.Models || {};

(function () {
    'use strict';

    Romnote.Models.NoteContent = Backbone.Model.extend({

        url: '',

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
