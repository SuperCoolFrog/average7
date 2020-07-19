import angular from 'angular';
import CalculatorTableModule, { CALCULATOR_TABLE_MODULE_NAME } from './calculator-table.module';
// import data from './data.json';

const template = require('./calculator-table.template.html');

const getUnit = (data) => {
    return (data && data.settings && data.settings.unit) || '';
}

function CalculatorTableController(Database) {
    this.data = Database.getData();
    this.selectedRecordIds = [];
    this.hasSelectedRows = false;
    this.selectedRowsAverage = 0;
    this.records = this.data ? this.data.records || [] : [];
    this.unit = getUnit(this.data);

    const calculateAverage7 = () => {
        if (!(this.data && this.data.records && this.data.records.length)) {
            this.noDataOrRecords = true;
            this.selectedRowsAverage = 0;
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

        this.average = Math.round((average + Number.EPSILON) * 100) / 100
    };

    const updateSelectedRowsAvg = () => {
        if (this.selectedRecordIds.length < 1) {
            this.selectedRowsAverage = 0;
            return;
        }
        const selectedRecords = this.records.filter(record => this.selectedRecordIds.indexOf(record.id) > -1);
        const total = selectedRecords.reduce((total, record) => parseFloat(record.value) + total, 0.0);
        const average = total / this.selectedRecordIds.length;
        this.selectedRowsAverage = Math.round((average + Number.EPSILON) * 100) / 100;
    };

    /** Selection Handlers **/
    this.isSelected = (rowElement) => this.selectedRecordIds.indexOf(rowElement.record.id) > -1;

    this.toggleRowSelected = (rowElement) => {
        const { record } = rowElement;
        const indexOfRecordId = this.selectedRecordIds.indexOf(record.id);

        if (indexOfRecordId > -1) {
            this.selectedRecordIds.splice(indexOfRecordId, 1);
        } else {
            this.selectedRecordIds.push(record.id);
        }

        this.hasSelectedRows = this.selectedRecordIds.length > 0;
        updateSelectedRowsAvg();
    };

    this.handleUnselectClick = () => {
        this.selectedRecordIds.splice(0, this.selectedRecordIds.length);
        this.hasSelectedRows = false;
        updateSelectedRowsAvg();
    };

    this.handleDeleteClick = () => {
        const recordsToKeep = this.records.filter(record => this.selectedRecordIds.indexOf(record.id) === -1);
        let data = Database.getData() || {};
        data = Object.assign({}, data, {
            records: recordsToKeep,
        });
        Database.saveData(data);
        this.data = data;
        this.records = data.records;
        this.handleUnselectClick();
        calculateAverage7();
    };

    calculateAverage7();
};

CalculatorTableController.$inject = ['Database'];


CalculatorTableModule.component(CALCULATOR_TABLE_MODULE_NAME, {
    template,
    controller: CalculatorTableController,
});

export default CALCULATOR_TABLE_MODULE_NAME;