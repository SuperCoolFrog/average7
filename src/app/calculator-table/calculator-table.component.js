import angular from 'angular';
import { CALCULATOR_TABLE_MODULE_NAME, CalculatorTableModule } from './calculator-table.module';

const template = require('./calculator-table.template.html');

function CalculatorTableController() {
    this.header = 'CALCULATOR TABLE';
};

CalculatorTableModule.component(CALCULATOR_TABLE_MODULE_NAME, {
    template,
    controller: CalculatorTableController,
});

export default CALCULATOR_TABLE_MODULE_NAME;