(function () {
    'use strict';

    angular.module('ngMilitarySymbology')
        .provider('MS', milSymbol);

    function milSymbol($windowProvider) {
        var MS;

        return {
            setGlobals: setGlobals,
            $get: function () {
                return MS;
            }
        }

        function setGlobals() {
            MS = $windowProvider.$get().MS;
            MS.setStandard('APP6');
        }

    }

    milSymbol.$inject = ['$windowProvider'];

})();