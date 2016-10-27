(function () {
    'use strict';

    angular.module('ngMilitarySymbology', [])
        .config(configFn);

    function configFn(MSProvider) {
        MSProvider.setGlobals();
    }

    configFn.$inject = ['MSProvider'];
})();