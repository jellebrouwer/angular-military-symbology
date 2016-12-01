# Angular Military Symbology
Angular implementation of MilSymbol, created by Spatial Illusions.

## Installation
`npm i angular-military-symbology --save`

## Development
Run `npm install` and `npm start`.

## Implementation
Add ngMilitarySymbology to the dependecies of your app.

`angular.module('my-app', ['ngMilitarySymbology']);`

Use the directive in your templates.

`<mil-symbol sidc="{{$ctrl.sidc}}" sym-options="$ctrl.options">
</mil-symbol>`