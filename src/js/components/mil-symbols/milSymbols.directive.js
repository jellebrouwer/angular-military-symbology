(function () {
    'use strict';

    angular.module('ngMilitarySymbology')
        .directive('milSymbol', milSymbol);

    function milSymbol() {

        return {
            restrict: 'E',
            scope: {
                sidc: '@',
                symOptions: '='
            },
            link: link,
            controller: 'MilSymbolController'
        };

        function link(scope, element, attrs) {

            element.addClass('mil-symbol');

            scope.$watch('sidc', function (newValue) {
                if (newValue) {
                    renderSymbol();
                }
            });

            scope.$watch('symOptions', function (newValue) {
                if (newValue) {
                    // Set defaults;
                    scope.symOptions.size = scope.symOptions.size || 50;
                    renderSymbol();
                }
            }, true);

            function renderSymbol() {
                var currentSVG = angular.element(element).find('svg'),
                    symbol = new MS.symbol(scope.sidc, scope.symOptions).getMarker(),
                    symbolElement = symbol.asSVG();

                if (currentSVG.length > 0) {
                    currentSVG.remove();
                }
                angular.element(element).append(symbolElement);
            }



        }
    }

})();