(function () {
    'use strict';

    angular.module('ngMilSymbols', [])
        .config(configFn);

    function configFn(MSProvider) {
        MSProvider.setGlobals();
    }

    configFn.$inject = ['MSProvider'];
})();