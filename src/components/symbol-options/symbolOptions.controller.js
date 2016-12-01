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