import { Application, AbstractApplication } from "@tyframe/core";

@Application({
    services: [
    ],
    handlers: [
    ],
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
