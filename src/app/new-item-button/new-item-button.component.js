import newItemButtonModule, { NEW_ITEM_BUTTON_MODULE_NAME } from './new-item-button.module';

const template = require('./new-item-button.template.html');

function ArchiveButtonController() {
    const self = this;
}

newItemButtonModule.component(NEW_ITEM_BUTTON_MODULE_NAME, {
    template,
    controller: ArchiveButtonController,
});

export default NEW_ITEM_BUTTON_MODULE_NAME;