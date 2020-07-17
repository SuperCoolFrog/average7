import angular from 'angular';
import CalculatorTableModule, { CALCULATOR_TABLE_MODULE_NAME } from './calculator-table.module';
// import data from './data.json';

const template = require('./calculator-table.template.html');

const getUnit = (data) => {
    return (data && data.settings && data.settings.unit) || '';
}

function CalculatorTableController(Database) {
    this.data = Database.getData();

    if (!this.data || !this.data.records) {
        this.noDataOrRecords = true;
        return;
    }

    const records = this.data.records;

    let sortedData = records.sort((a, b) => (new Date(b.date)) - (new Date(a.date))).slice();

    const lastSeven = [];
    for (let i = 0; i < 7; i++) {
        let record = sortedData[i];
        if (record) {
            lastSeven.push(record);
        }
    }

    let total = lastSeven.reduce((total, record) => parseFloat(record.value) + total, 0.0);
    let average = total / (lastSeven.length < 7 ? lastSeven.length : 7);

    this.records = records;
    this.unit = getUnit(this.data);
    this.average = Math.round((average + Number.EPSILON) * 100) / 100
};

CalculatorTableController.$inject = ['Database'];

CalculatorTableModule.component(CALCULATOR_TABLE_MODULE_NAME, {
    template,
    controller: CalculatorTableController,
});

export default CALCULATOR_TABLE_MODULE_NAME;