/*global Romnote, Backbone*/

Romnote.Collections = Romnote.Collections || {};

(function () {
    'use strict';

    Romnote.Collections.Note = Backbone.Collection.extend({
        url: '/api/notes',
        model: Romnote.Models.Note

    });

})();
