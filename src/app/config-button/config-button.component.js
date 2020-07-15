import configButtonModule, { CONFIG_BUTTON_MODULE_NAME } from './config-button.module';

const template = require('./config-button.template.html');

function ConfigButtonController() {
    const self = this;
}

configButtonModule.component(CONFIG_BUTTON_MODULE_NAME, {
    template,
    controller: ConfigButtonController,
});

export default CONFIG_BUTTON_MODULE_NAME;