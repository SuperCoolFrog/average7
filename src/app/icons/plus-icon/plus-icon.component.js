import plusIconModule, { PLUS_ICON_MODULE_NAME } from './plus-icon.module';

const template = require('./plus-icon.template.html');

plusIconModule.component(PLUS_ICON_MODULE_NAME, {
    template,
});

export default PLUS_ICON_MODULE_NAME;