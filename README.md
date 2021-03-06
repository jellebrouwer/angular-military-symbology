# Angular Military Symbology
Angular implementation of MilSymbol, created by Spatial Illusions.

## Installation
```
npm i angular-military-symbology --save
```

## Implementation
Add ngMilitarySymbology to the dependecies of your app.

```
angular.module('my-app', ['ngMilitarySymbology']);
```

Use the directive in your templates.

```
<mil-symbol sidc="{{$ctrl.sidc}}" sym-options="$ctrl.options">
</mil-symbol>
```

Inject MSProvider in the config function to set globals ([milsymbol API docs]). MSProvider has a setGlobals method which accepts an Object, where the properties are the function names and the values contains an Array with arguments.

### Example
```
(function() {
    'use strict';

    angular.module('my-app', [
        'ngMilitarySymbology'
    ]);

    angular.module('my-app')
        .component('my-component', {
            template: `
                <mil-symbol sidc="SFGPEWRH--MT"></mil-symbol>
            `
        });

    angular.module('symbology')
        .config(configFn);

    function configFn(MSProvider) {

        MSProvider.setGlobals({
            setStandard: ['APP6']
        });

    }

    configFn.$inject = ['MSProvider'];

})();
```

## Development
Clone this repo and run `npm i` and `npm start`.

[milsymbol API docs]: http://spatialillusions.com/milsymbol/docs/index.html