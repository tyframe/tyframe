import { Application, AbstractApplication } from '@tyframe/core';

@Application({
    services: [
    ],
    handler: [
    ],
})
export class App extends AbstractApplication {
    constructor() {
        super();

        console.log('Application initialized.'); 
    }

    run() {
        console.log('run');
    }
}
