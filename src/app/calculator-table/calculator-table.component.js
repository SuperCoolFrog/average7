import angular from 'angular';
import CalculatorTableModule, { CALCULATOR_TABLE_MODULE_NAME } from './calculator-table.module';
import data from './data.json';

const template = require('./calculator-table.template.html');

function CalculatorTableController(Database) {
    this.unit = 'lbs';
    this.data = data;

    let sortedData = this.data.sort((a, b) => (new Date(b.date)) - (new Date(a.date))).slice();

    const lastSeven = [];
    for (let i = 0; i < 7; i++) {
        lastSeven.push(sortedData[i]);
    }

    let total = lastSeven.reduce((total, record) => parseFloat(record.value) + total, 0.0);
    let average = total / 7;

    this.average = Math.round((average + Number.EPSILON) * 100) / 100

    Database.getData();
};

CalculatorTableController.$inject = ['Database'];

CalculatorTableModule.component(CALCULATOR_TABLE_MODULE_NAME, {
    template,
    controller: CalculatorTableController,
});

export default CALCULATOR_TABLE_MODULE_NAME;