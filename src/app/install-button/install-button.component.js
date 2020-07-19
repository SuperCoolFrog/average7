import installButtonModule, { INSTALL_BUTTON_MODULE_NAME } from './install-button.module'; 

const template = require('./install-button.template.html');

function InstallButtonController($window, $scope, $timeout) {
    this.deferredPrompt = null;

    $window.addEventListener('beforeinstallprompt', (e) => {
        this.deferredPrompt = e;
        $scope.$digest();
    });

    this.handleClick = () => {
        if (!this.deferredPrompt) { $window.alert('Unable to install right now.'); return; };
        this.deferredPrompt.prompt();
        this.deferredPrompt.userChoice.then((choiceResult) => {
            /**
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }
             */
        });
    };
}
InstallButtonController.$inject = ['$window', '$scope', '$timeout'];

installButtonModule.component(INSTALL_BUTTON_MODULE_NAME, {
    template,
    controller: InstallButtonController,
});

export default INSTALL_BUTTON_MODULE_NAME;