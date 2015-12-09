/*global Romnote, Backbone, JST*/

Romnote.Views = Romnote.Views || {};

(function () {
    'use strict';

    Romnote.Views.Note = Backbone.View.extend({

        template: JST['app/scripts/templates/note.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
