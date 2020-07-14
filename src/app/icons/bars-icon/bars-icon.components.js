import BarsIconModule, { BARS_ICON_MODULE_NAME } from './bars-icon.module';

const template = require('./bars-icon.template.html');

BarsIconModule.component(BARS_ICON_MODULE_NAME, {
    template,
    controller: () => {},
});

export default BARS_ICON_MODULE_NAME;