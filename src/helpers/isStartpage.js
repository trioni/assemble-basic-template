module.exports.register = function (Handlebars, options, params) {
    'use strict';
    Handlebars.registerHelper("isNotStartpage", function(pagename, options) {
        if(pagename !== 'index.html') {
            return options.fn(this);
        }
    });
};
