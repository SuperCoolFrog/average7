import configButtonModule, { CONFIG_BUTTON_MODULE_NAME } from './config-button.module';

const template = require('./config-button.template.html');

function ConfigButtonController() {
    const self = this;
    self.handleClick = function handleClick() {
        console.log('Config Button Clicked')
    };
}

configButtonModule.component(CONFIG_BUTTON_MODULE_NAME, {
    template,
    controller: ConfigButtonController,
    bindings: {
        isOpen: "=",
    },
});

export default CONFIG_BUTTON_MODULE_NAME;