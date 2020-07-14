import angular from 'angular';
import CalculatorTableModule, { CALCULATOR_TABLE_MODULE_NAME } from './calculator-table.module';
import { data } from 'autoprefixer';

const template = require('./calculator-table.template.html');

function CalculatorTableController() {
    this.unit = 'lbs';
    this.data = [
        { date: '01/01/1900', value: '1', notes: 'a' },
        { date: '02/02/1900', value: '2', notes: 'b' },
        { date: '03/03/1900', value: '3', notes: 'c' },
        { date: '04/04/1900', value: '4', notes: 'd' },
        { date: '05/05/1900', value: '5', notes: 'e' },
        { date: '06/06/1900', value: '6', notes: 'f' },
        { date: '07/07/1900', value: '7', notes: 'g' },
        { date: '08/08/1900', value: '8', notes: 'This is some notes to see if it stays on one line' },
    ];
    let lastSeven = this.data.sort((a, b) => (new Date(b.date)) - (new Date(a.date)));
    let total = lastSeven.reduce((total, record) => parseFloat(record.value) + total, 0.0);
    let average = total / 7;

    this.average = Math.round((average + Number.EPSILON) * 100) / 100
};

CalculatorTableModule.component(CALCULATOR_TABLE_MODULE_NAME, {
    template,
    controller: CalculatorTableController,
});

export default CALCULATOR_TABLE_MODULE_NAME;