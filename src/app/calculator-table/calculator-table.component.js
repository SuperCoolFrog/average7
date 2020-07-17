import angular from 'angular';
import CalculatorTableModule, { CALCULATOR_TABLE_MODULE_NAME } from './calculator-table.module';
// import data from './data.json';

const template = require('./calculator-table.template.html');

const getUnit = (data) => {
    return (data && data.settings && data.settings.unit) || '';
}

function CalculatorTableController(Database) {
    this.data = Database.getData();
    this.selectedRecords = [];
    this.hasSelectedRows = false;
    this.selectedRowsAverage = 0;

    if (!this.data || !this.data.records) {
        this.noDataOrRecords = true;
        return;
    }

    const records = this.data.records;


    /** For Last 7 Average **/
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

    /** Selection Handlers **/

    const updateSelectedRowsAvg = () => {
        if (this.selectedRecords.length < 1) {
            this.selectedRowsAverage = 0;
            return;
        }
        let total = this.selectedRecords.reduce((total, record) => parseFloat(record.value) + total, 0.0);
        let average = total / this.selectedRecords.length;
        this.selectedRowsAverage = Math.round((average + Number.EPSILON) * 100) / 100;
    };

    this.isSelected = (rowElement) => this.selectedRecords.indexOf(rowElement.record) > -1;

    this.toggleRowSelected = (rowElement) => {
        const indexOfRecord = this.selectedRecords.indexOf(rowElement.record);

        if (indexOfRecord > -1) {
            this.selectedRecords.splice(indexOfRecord, 1);
        } else {
            this.selectedRecords.push(rowElement.record);
        }

        this.hasSelectedRows = this.selectedRecords.length > 0;
        updateSelectedRowsAvg();
    };

    this.handleDeleteClick = () => {};
    this.handleUnselectClick = () => {
        this.selectedRecords.splice(0, this.selectedRecords.length);
        this.hasSelectedRows = false;
        updateSelectedRowsAvg();
    };
};

CalculatorTableController.$inject = ['Database'];


CalculatorTableModule.component(CALCULATOR_TABLE_MODULE_NAME, {
    template,
    controller: CalculatorTableController,
});

export default CALCULATOR_TABLE_MODULE_NAME;