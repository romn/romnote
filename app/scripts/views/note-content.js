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
            this.el.innerHTML = this.template(this.model.toJSON());
        },

        handleSaveClick: function () {
            this.model.set({
                title: this.el.querySelector('.component__note-title').value,
                content: {
                    text: this.el.querySelector('.component__note-text').value
                }    
            });
            
            this.model.save({}, {success: function (data) {
                var state = Romnote.State;
                console.log(data);
                state.router.navigate('notebooks/' + state.notebookId + '/notes/' + data.attributes._id, {trigger: true});
            }});
        }

    });

})();
