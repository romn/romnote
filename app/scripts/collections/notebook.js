/*global Romnote, Backbone*/

Romnote.Collections = Romnote.Collections || {};

(function () {
    'use strict';

    Romnote.Collections.Notebook = Backbone.Collection.extend({
        url: '/api/notebooks/',
        model: Romnote.Models.Notebook,
        comparator: 'name'
    });

})();
