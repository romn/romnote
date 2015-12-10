/*global Romnote, Backbone, JST*/

Romnote.Views = Romnote.Views || {};

(function () {
    'use strict';

    Romnote.Views.Notebooks = Backbone.View.extend({
        template: JST['app/scripts/templates/notebooks.ejs'],
        tagName: 'ul',
        className: 'component__notebooks',
        
        events: {
            'click .component__notebooks-plusOne': 'handleCreateClick',
            'mouseenter .component__notebooks-notebook': 'handleNotebookMouseenter',
            'click .component__notebooks-delete': 'handleDeleteClick',
            'click .component__notebooks-update': 'handleUpdateClick',
            'keydown .component__notebooks-suggestedName': 'handleSuggestedNameKeydown'
            //'click .component__notebooks-notebook': 'handleNotebookSelection'
        },

        initialize: function () {
            this.listenTo(this.collection, 'sync', this.render);
        },

        render: function () {
            this._nullObsoletes();
            this.el.innerHTML = this.template({data: this.collection.toJSON()});
        },

        handleCreateClick: function () {
            event.stopPropagation();
            this.collection.create({name: this.el.querySelector('.component__notebooks-newName').value});
        },

        handleNotebookMouseenter: function (event) {
            this._appendIndividualControls(event);
        },

        handleDeleteClick: function (event) {
            var self = this;
            var model = this._getTargetModel(event);

            event.stopPropagation();

            model.destroy({wait: true}).done(function () {
                self.render();
            });
        },

        handleUpdateClick: function (event) {
            event.stopPropagation();
            this._toggleEditMode(event);
        },

        handleSuggestedNameKeydown: function (event) {
            switch (event.which) {
                case 13: 
                    this._getTargetModel(event).save({name: event.target.value});
                    break;
                case 27: 
                    this._toggleEditMode(event);
                    break;
            }
        },

        handleNotebookSelection: function (event) {
            var model = this._getTargetModel(event);
            Romnote.State.router.navigate('/notebooks/' + model.get('_id'), { trigger: true });
        },

        _toggleEditMode: function (event) {
            var root = this._getTargetRoot(event);
            
            root.classList.toggle('component__notebooks-notebook--editMode');
            root.querySelector('.component__notebooks-suggestedName').focus();
        },

        _nullObsoletes: function () {
            this._nullIndividualControls();
        },

        _getTargetRoot: function (event) {
            return Romnote.Utils.closest(event.target, '.component__notebooks-notebook');
        },

        _getAllRoots: function () {
            return this.el.querySelectorAll('.component__notebooks-notebook');
        },

        _getIndividualControls: function () {
            return (this._individualControls || (this._individualControls = this.el.querySelector('.component__notebooks-individualControls')));
        },

        _nullIndividualControls: function () {
            if (this._individualControls) {
                (this._individualControls = null);
            }
        },

        _appendIndividualControls: function (event) {
            var controls = this._getIndividualControls();
            var root = this._getTargetRoot(event);
            root.appendChild(controls);
        },

        _getTargetModel: function (event) {
            var modelIndex = Array.prototype.indexOf.call(this._getAllRoots(), this._getTargetRoot(event));
            return this.collection.at(modelIndex);
        }
    });

})();
