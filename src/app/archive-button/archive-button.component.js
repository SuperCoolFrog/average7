import archiveButtonModule, { ARCHIVE_BUTTON_MODULE_NAME } from './archive-button.module';

const template = require('./archive-button.template.html');

function ArchiveButtonController() {
    const self = this;
    self.handleClick = function handleClick() {
        console.log('Archive Button Clicked')
    };
}

archiveButtonModule.component(ARCHIVE_BUTTON_MODULE_NAME, {
    template,
    controller: ArchiveButtonController,
    bindings: {
        isOpen: "=",
    },
});

export default ARCHIVE_BUTTON_MODULE_NAME;