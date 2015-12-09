/*global Romnote, Backbone, JST*/

Romnote.Views = Romnote.Views || {};

(function () {
    'use strict';

    Romnote.Views.Notes = Backbone.View.extend({
        template: JST['app/scripts/templates/notes.ejs'],
        tagName: 'ul',
        className: 'component__notes',
        events: {},

        initialize: function () {
            this.listenTo(this.collection, 'sync', this.render);
        },

        render: function () {
            this.el.innerHTML = this.template({data: this.collection.toJSON()});
        }

    });

})();
