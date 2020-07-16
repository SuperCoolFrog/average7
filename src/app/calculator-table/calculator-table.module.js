import angular from 'angular';
import databaseService from '../core/database/database.service';

export const CALCULATOR_TABLE_MODULE_NAME = 'calculatorTable';

export const CalculatorTableModule = angular.module(CALCULATOR_TABLE_MODULE_NAME, [
    databaseService,
]);

export default CalculatorTableModule;