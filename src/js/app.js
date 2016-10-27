(function () {
    'use strict';

    angular.module('symbols', ['ngMilitarySymbology'])
        .run(function () {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker
                    .register('./service-worker.js')
                    .then(function () { console.log('Service Worker Registered'); });
            }
        });

})();