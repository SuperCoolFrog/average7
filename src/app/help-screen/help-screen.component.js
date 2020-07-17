import helpScreenModule, { HELP_SCREEN_MODULE_NAME } from './help-screen.module';

const template = require('./help-screen.template.html');

function HelpScreenController() {
}

helpScreenModule.component(HELP_SCREEN_MODULE_NAME, {
    template,
    controller: HelpScreenController,
})

export default HELP_SCREEN_MODULE_NAME;
