# Angular Military Symbology
Angular implementation of MilSymbol, created by Spatial Illusions.

## Development
Run `npm install` and `gulp start`.

## Implementation
Add ngMilitarySymbology to the dependecies of your app.

`angular.module('my-app', ['ngMilitarySymbology']);`

Use the directive in your templates.

`<mil-symbol sidc="{{$ctrl.sidc}}" sym-options="$ctrl.options">
</mil-symbol>`