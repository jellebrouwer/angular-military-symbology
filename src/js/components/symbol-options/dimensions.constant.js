(function () {
    'use strict';

    angular.module('ngMilSymbols')
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