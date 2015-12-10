/* global Romnote, Q */

(function () {
    'use strict';
    var view = null;
    var collection = null;

    function reset() {
        var deferred = Q.defer();

        if (!collection) {
            collection = new Romnote.Collections.Note();
            view = new Romnote.Views.Notes({collection: collection});
            document.querySelector('[data-notes-container-id="01"]').appendChild(view.el);
        }
        
        collection.fetch({reset: true, success: function () {
            Romnote.State.noteId = Romnote.State.noteId || (collection.at(0) && collection.at(0).get('_id'));
            deferred.resolve();
        }});
        
        return deferred.promise;
    }

    Romnote.Components.Notes = {
        reset: reset
    };

})();