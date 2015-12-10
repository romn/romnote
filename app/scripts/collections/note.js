/*global Romnote, Backbone*/

Romnote.Collections = Romnote.Collections || {};

(function () {
    'use strict';

    Romnote.Collections.Note = Backbone.Collection.extend({
        url: function () {
            return '/api/notebooks/' + Romnote.State.notebookId + '/notes';
        },
        model: Romnote.Models.Note

    });
})();
