import navButtonModule, { NAV_BUTTON_MODULE_NAME } from './nav-button.module';

const template = require('./nav-button.template.html');

function NavButtonController() {
    const self = this;
    self.toggleNav = function toggleNav() {
        self.isOpen = !self.isOpen;
        console.log(self.isOpen);
    };
}

navButtonModule.component(NAV_BUTTON_MODULE_NAME, {
    template,
    controller: NavButtonController,
    bindings: {
        isOpen: "=",
    },
})

export default NAV_BUTTON_MODULE_NAME;