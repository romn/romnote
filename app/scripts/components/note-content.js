/* global Romnote, Q */

(function () {
    'use strict';
    var view = null;
    var model = null;

    function reset() {
        var deferred = Q.defer();

        if (!model) {
            model = new Romnote.Models.NoteContent();
            view = new Romnote.Views.NoteContent({model: model});
            document.querySelector('[data-note-container-id="01"]').appendChild(view.el);
        }
        model.fetch({reset: true, success: function () {
            deferred.resolve();
        }});
        
        return deferred.promise;
    }

    Romnote.Components.NoteContent = {
        reset: reset
    };

})();