import cogIconModule, { COG_ICON_MODULE_NAME } from './cog-icon.module';

const template = require('./cog-icon.template.html');

cogIconModule.component(COG_ICON_MODULE_NAME, {
    template,
});

export default COG_ICON_MODULE_NAME;