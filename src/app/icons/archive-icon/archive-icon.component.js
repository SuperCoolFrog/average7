import archiveIconModule, { ARCHIVE_ICON_MODULE_NAME } from './archive-icon.module';

const template = require('./archive-icon.template.html');

archiveIconModule.component(ARCHIVE_ICON_MODULE_NAME, {
    template,
});

export default ARCHIVE_ICON_MODULE_NAME;