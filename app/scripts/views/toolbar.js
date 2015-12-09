/*global Romnote, Backbone, JST*/

Romnote.Views = Romnote.Views || {};

(function () {
    'use strict';

    Romnote.Views.Toolbar = Backbone.View.extend({
        template: JST['app/scripts/templates/toolbar.ejs'],
        tagName: 'ul',
        className: 'component__toolbar',
        initialize: function () {
        },

        render: function () {
            this.el.innerHTML = this.template();
        }

    });

})();
