/*global Romnote, Backbone*/

Romnote.Models = Romnote.Models || {};

(function () {
    'use strict';

    Romnote.Models.Notebook = Backbone.Model.extend({

        urlRoot: '/api/notebooks/',
        idAttribute: '_id',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs) {
            if (!attrs.name) {
                return 'A notebook must have a name.';
            }
        },

        parse: function(response)  {
            return response;
        }
    });

})();
