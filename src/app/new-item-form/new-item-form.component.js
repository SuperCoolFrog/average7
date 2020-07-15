import newItemFormModule, { NEW_ITEM_FORM_MODULE_NAME } from './new-item-form.module';

const template = require('./new-item-form.template.html');

function newItemFormController() {
    var self = this;
    const defaultForm = {
        date: '',
        value: '',
        notes: '',
    };

    self.form = Object.assign({}, defaultForm, { date: new Date() });

    self.handleSaveClick = () => {
        console.log(self.form);
    };
}

newItemFormModule.component(NEW_ITEM_FORM_MODULE_NAME, {
    template,
    controller: newItemFormController,
});

export default NEW_ITEM_FORM_MODULE_NAME;