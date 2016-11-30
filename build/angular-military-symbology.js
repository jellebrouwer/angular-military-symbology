(function () {
    'use strict';

    angular.module('symbols', ['ngMilitarySymbology'])
        .run(function () {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker
                    .register('./service-worker.js');
            }
        });

})();
(function () {
    'use strict';

    angular.module('ngMilitarySymbology', [])
        .config(configFn);

    function configFn(MSProvider) {
        MSProvider.setGlobals();
    }

    configFn.$inject = ['MSProvider'];
})();
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
            link: link
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
(function () {
    'use strict';

    angular.module('ngMilitarySymbology')
        .constant('dimensions', {
            affiliations: [
                {
                    name: 'Friend',
                    key: 'F'
                },
                {
                    name: 'Assumed friend',
                    key: 'A'
                },
                {
                    name: 'Hostile',
                    key: 'H'
                },
                {
                    name: 'Unknown',
                    key: 'U'
                },
                {
                    name: 'Pending',
                    key: 'P'
                }
            ],
            battle: [
                {
                    name: 'Space',
                    key: 'P'
                },
                {
                    name: 'Air',
                    key: 'A'
                },
                {
                    name: 'Ground',
                    key: 'G'
                },
                {
                    name: 'Sea surface',
                    key: 'S'
                },
                {
                    name: 'Sea subsurface',
                    key: 'U'
                }
            ]
        });

})();
(function () {
    'use strict';

    angular.module('ngMilitarySymbology')
        .component('symbolOptions', {
            templateUrl: 'src/js/components/symbol-options/symbol-options.html',
            controller: 'SymbolOptionsController',
            controllerAs: 'symbolOptionsCtrl'
        });

})();
(function () {
    'use strict';

    angular.module('ngMilitarySymbology')
        .controller('SymbolOptionsController', SymbolOptionsController);

    function SymbolOptionsController(dimensions) {
        var vm = this;

        vm.affiliations = dimensions.affiliations;
        vm.battleDimensions = dimensions.battle;
        vm.setAffiliation = setAffiliation;
        vm.setbattleDimension = setbattleDimension;

        vm.sidcs = [
            'SFGPEWRH--MT',
            'SFG-UCI----D'
        ];
        vm.sidc = vm.sidcs[0];

        // Set current options
        vm.affiliation = vm.affiliations[getCurrentSymbolDimensionIndex(vm.affiliations, getDimensionIndex('affiliation'))];
        vm.battleDimension = vm.battleDimensions[getCurrentSymbolDimensionIndex(vm.battleDimensions, getDimensionIndex('battle'))];

        vm.options = {
            quantity: 200,
            staffComments: "for reinforcements".toUpperCase(),
            additionalInformation: "added support for JJ".toUpperCase(),
            direction: (750 * 360 / 6400),
            type: "machine gun".toUpperCase(),
            dtg: "30140000ZSEP97",
            location: "0900000.0E570306.0N"
        };

        function setAffiliation() {
            setDimension(1, vm.affiliation.key);
        }

        function setbattleDimension() {
            setDimension(2, vm.battleDimension.key);
        }

        function setDimension(index, dimension) {
            vm.sidc = replaceAt(vm.sidc, index, dimension);
        }

        function getDimensionIndex(dimension) {
            var dimensions = ['war', 'affiliation', 'battle'];
            return dimensions.indexOf(dimension);
        }

        function getCurrentSymbolDimensionIndex(dimensions, dimensionIndex) {
            var currentSymbolDimension = vm.sidc.charAt(dimensionIndex),
                currentSymbolDimensionIndex;

            dimensions.forEach(function (affiliation, index) {
                if (currentSymbolDimension === affiliation.key) {
                    currentSymbolDimensionIndex = index;
                }
            });

            return currentSymbolDimensionIndex;
        }

        function replaceAt(str, index, character) {
            return str.substr(0, index) + character + str.substr(index + character.length);
        }

    }

    SymbolOptionsController.$inject = ['dimensions'];

})();