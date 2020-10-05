import { ExampleHandler } from '../handler/example-handler';
import { ExampleService } from '../service/example-service';
import { Application, AbstractApplication } from '@tyframe/core';

@Application({
    services: [ExampleService],
    handlers: [ExampleHandler],
})
export class App extends AbstractApplication {
    constructor() {
        super();

        console.log('Application initialized.');
    }
    run(): void {
        console.log('run');
    }
}
