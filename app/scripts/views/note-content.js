/*global Romnote, Backbone, JST*/

Romnote.Views = Romnote.Views || {};

(function () {
    'use strict';

    Romnote.Views.NoteContent = Backbone.View.extend({
        template: JST['app/scripts/templates/note-content.ejs'],
        tagName: 'div',
        className: 'component__note',
        events: {
            'click .component__note-save': 'handleSaveClick'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            console.log(this.model);
            this.el.innerHTML = this.template(this.model.toJSON());
        },

        handleSaveClick: function () {
            
        }

    });

})();
