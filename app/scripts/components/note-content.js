/* global Romnote */

(function () {
    'use strict';
    var view = null;
    var model = null;

    function reset() {
        if (!model) {
            model = new Romnote.Models.NoteContent();
            view = new Romnote.Views.NoteContent({model: model});
            document.querySelector('[data-note-container-id="01"]').appendChild(view.el);
        }
        switchOffDraftMode();
    }

    function switchOnDraftMode () {
        console.log('switching draft mode');
        if (!Romnote.State.isInDraftMode) {
            Romnote.State.isInDraftMode = true;
            model.clear({silent: true});
            model.set(_.extend({ notebookId: Romnote.State.notebookId}, model.defaults()));
            return true;        
        } 
        return false;
    }

    function switchOffDraftMode () {
        if (Romnote.State.isInDraftMode) {
            Romnote.State.isInDraftMode = false;
            model.fetch({reset: true});
        } else {
            model.fetch({reset: true});
        }
    }

    Romnote.Components.NoteContent = {
        reset: reset,
        switchOffDraftMode: switchOffDraftMode,
        switchOnDraftMode: switchOnDraftMode
    };

})();