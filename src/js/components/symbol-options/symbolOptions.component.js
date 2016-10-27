(function () {
    'use strict';

    angular.module('ngMilitarySymbology')
        .component('symbolOptions', {
            templateUrl: 'src/js/components/symbol-options/symbol-options.html',
            controller: 'SymbolOptionsController',
            controllerAs: 'symbolOptionsCtrl'
        });

})();