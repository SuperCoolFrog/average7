import newItemButtonModule, { NEW_ITEM_BUTTON_MODULE_NAME } from './new-item-button.module';

const template = require('./new-item-button.template.html');

function ArchiveButtonController() {
    const self = this;
    self.handleClick = function handleClick() {
        console.log('New Item Button Clicked')
    };
}

newItemButtonModule.component(NEW_ITEM_BUTTON_MODULE_NAME, {
    template,
    controller: ArchiveButtonController,
    bindings: {
        isOpen: "=",
    },
});

export default NEW_ITEM_BUTTON_MODULE_NAME;