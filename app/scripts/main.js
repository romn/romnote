/*global Romnote, Backbone*/

window.Romnote = {
    Components: {},
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Utils: {},
    State: {}
};

window.Romnote.init = function () {
    'use strict';

    Romnote.State.router = new Romnote.Routers.App();
    Backbone.history.start({pushState: true});
};

jQuery(function() {
    'use strict';
    Romnote.init();
});

window.Romnote.Utils.closest = function (elem, selector) {
    'use strict';
    var matchesSelector = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;

    while (elem) {
        if (matchesSelector.bind(elem)(selector)) {
            return elem;
        } else {
            elem = elem.parentElement;
        }
    }
    return false;
};