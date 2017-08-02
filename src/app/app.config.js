(function() {
    'use strict';

    angular
        .module('app.config', [])
        .value('config', config);
    
    var config = {
        appTitle: 'Angular Forum SPA',
        version: '0.5.0'
    };
})();