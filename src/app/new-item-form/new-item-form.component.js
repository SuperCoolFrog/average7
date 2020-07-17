import newItemFormModule, { NEW_ITEM_FORM_MODULE_NAME } from './new-item-form.module';
import { data } from 'autoprefixer';

const template = require('./new-item-form.template.html');

function NewItemFormController(Database, $timeout) {
    var self = this;
    const defaultForm = {
        date: '',
        value: '',
        notes: '',
    };

    const resetForm = () => {
        self.form = Object.assign({}, defaultForm, { date: new Date() });
    };
    resetForm();
    
    const showSuccessMessage = (form) => {
        const {
            date,
            value,
            notes,
        } = form;
        self.addedRecord = {
            date: date.toLocaleDateString(),
            value,
            notes,
        };
        self.showSuccessMessage = true;

        window.formDate = date;

        $timeout(() => {
            self.showSuccessMessage = false;
            $timeout(() => { self.addedRecord = null; }, 1000);
        }, 1000);

        resetForm();
    };

    self.handleSaveClick = () => {
        let data = Database.getData() || {};
        const records = data.records || [];
        const {
            date,
            value,
            notes,
        } = self.form;
        const record = {
            date: date.toLocaleDateString(),
            value,
            notes,
        };

        data = Object.assign({}, data, {
            records: [...records, record]
        });

        Database.saveData(data);
        showSuccessMessage(self.form);
    };
}
NewItemFormController.$inject = ['Database', '$timeout'];

newItemFormModule.component(NEW_ITEM_FORM_MODULE_NAME, {
    template,
    controller: NewItemFormController,
});

export default NEW_ITEM_FORM_MODULE_NAME;