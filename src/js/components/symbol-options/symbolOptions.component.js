(function () {
    'use strict';

    angular.module('ngMilSymbols')
        .component('symbolOptions', {
            templateUrl: 'src/js/components/symbol-options/symbol-options.html',
            controller: 'SymbolOptionsController',
            controllerAs: 'symbolOptionsCtrl'
        });

})();