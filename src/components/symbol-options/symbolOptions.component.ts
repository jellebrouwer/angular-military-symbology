import { Component } from '../decorators';
import { ngMilitarySymbology } from '../milSymbols.module';
import { Affiliations, Battle } from './dimensions.constant';

let symbolOptionsTemplateUrl: string = require('./symbol-options.html');

@Component({
    controllerAs: 'symbolOptionsCtrl',
    templateUrl: symbolOptionsTemplateUrl
})

export class SymbolOptionsComponent {

    // Some random examples
    sidcs = [
        'SFGPEWRH--MT',
        'SFG-UCI----D'
    ];
    sidc = this.sidcs[0];

    static $inject = ['affiliations', 'battle'];
    constructor(
        private affiliations: Affiliations,
        private battleDimensions: Battle
    ) { }

    // Set current options
    affiliation = this.affiliations[this.getCurrentSymbolDimensionIndex(this.affiliations, this.getDimensionIndex('affiliation'))];
    battleDimension = this.battleDimensions[this.getCurrentSymbolDimensionIndex(this.battleDimensions, this.getDimensionIndex('battle'))];

    options = {
        quantity: 200,
        staffComments: "for reinforcements".toUpperCase(),
        additionalInformation: "added support for JJ".toUpperCase(),
        direction: (750 * 360 / 6400),
        type: "machine gun".toUpperCase(),
        dtg: "30140000ZSEP97",
        location: "0900000.0E570306.0N"
    };

    setAffiliation() {
        this.setDimension(1, this.affiliation.key);
    }

    setbattleDimension() {
        this.setDimension(2, this.battleDimension.key);
    }

    private setDimension(index, dimension) {
        this.sidc = this.replaceAt(this.sidc, index, dimension);
    }

    private getDimensionIndex(dimension) {
        var dimensions = ['war', 'affiliation', 'battle'];
        return dimensions.indexOf(dimension);
    }

    private getCurrentSymbolDimensionIndex(dimensions, dimensionIndex) {
        var currentSymbolDimension = this.sidc.charAt(dimensionIndex),
            currentSymbolDimensionIndex;

        dimensions.forEach((affiliation, index) => {
            if (currentSymbolDimension === affiliation.key) {
                currentSymbolDimensionIndex = index;
            }
        });

        return currentSymbolDimensionIndex;
    }

    private replaceAt(str, index, character) {
        return str.substr(0, index) + character + str.substr(index + character.length);
    }

}

ngMilitarySymbology.component('symbolOptions', SymbolOptionsComponent);