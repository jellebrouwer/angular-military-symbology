import { module } from 'angular';

export let ngMilitarySymbology = module('ngMilitarySymbology', []);

// Components
import './mil-symbols/milSymbols.directive';
import './mil-symbols/milSymbols.provider';