(function () {
    'use strict';

    angular.module('ngMilSymbols', [])
        .config(configFn);

    function configFn(milSymbolProvider) {
        milSymbolProvider.setGlobals();
    }

    configFn.$inject = ['milSymbolProvider'];
})();