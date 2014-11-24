(function() {
    var site = site || {};
    site.log = function() {
        if( console.log ) {
            console.log( arguments );
        }
    }

    site.log('Hello', 'World');
})();
