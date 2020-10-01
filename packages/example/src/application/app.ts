import { ExampleService } from './../service/ExampleService';
import { ExampleHandler } from './../handler/ExampleHandler';
import { Application } from '../../../core/src/decorator/application';
import { AbstractApplication } from '../../../core/src/core/abstract-application';

@Application({
    services: [
        ExampleService
    ],
    handler: [
        ExampleHandler
    ],
})
export class App extends AbstractApplication {
    constructor() {
        super([], []);

        console.log('Application initialized.'); 
    }

    run() {
        console.log('run');
    }
}
