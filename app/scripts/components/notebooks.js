/* global Romnote, Q */

(function () {
    'use strict';
    var view = null;
    var collection = null;

    function reset() {
        
        var deferred = Q.defer();

        if (!collection) {
            collection = new Romnote.Collections.Notebook();
            view = new Romnote.Views.Notebooks({collection: collection});
            document.querySelector('[data-notebooks-container-id="01"]').appendChild(view.el);
        }

        collection.fetch({reset: true, success: function () {
            Romnote.State.notebookId = Romnote.State.notebookId || collection.at(0).get('_id');
            deferred.resolve();
        }});

        return deferred.promise;
    }

    Romnote.Components.Notebooks = {
        reset: reset
    };

})();