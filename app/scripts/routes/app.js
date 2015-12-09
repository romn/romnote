/*global Romnote, Backbone*/

Romnote.Routers = Romnote.Routers || {};

(function () {
    'use strict';

    Romnote.Routers.App = Backbone.Router.extend({
        routes: {
            '/': 'index',
            '/notebooks/:notebookId': 'notebook',
            '/notebooks/:notebookId/note/:noteId': 'note'
        },

        index: function () {

        },

        notebook: function () {

        },

        note: function () {

        }

    });

})();
